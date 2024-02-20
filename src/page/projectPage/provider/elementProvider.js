
import React, { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getProjectDetailRequest, setProjectDetailRequest } from '../../../request';
import { successMessage } from '../../../utils/message';
import { findActiveElement, findActiveComponent, findActiveIndex } from '../utils/findActive';
import { pushElement, replaceElement, insertElement, deleteElement, mergeElement, nestElement, unnestElement } from '../utils/elementDispatchUtil';
import { createElementByType, createElementByElement } from '../utils/elementCreate';
import { getRandomID } from '../../../utils/randomID';
import { getComponentMap } from '../utils/getComponentMap'
import { xhrRequest } from '../utils/xhrRequest';

export const ElementContext = createContext();

export const ElementProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [detail, setDetail] = useState({})

    const [activeElementID, setActiveElementID] = useState('')
    const [elementFloat, setElementFloat] = useState(false)
    const [unnestWhenDelete, setUnnestWhenDelete] = useState(false)

    const [element, elementDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return action.value
            case 'push':
                {
                    if (!action.id) return [...state, action.element || createElementByType(action.elementType)]
                    else return pushElement(state, action.id, action.element || createElementByType(action.elementType))
                }
            case 'insert':
                {
                    return insertElement({ childrenElement: state }, action.id, action.element || createElementByType(action.elementType), action.offset)
                }
            case 'delete':
                {
                    return deleteElement({ childrenElement: state }, action.id, unnestWhenDelete)
                }
            case 'replace':
                {
                    return replaceElement({ childrenElement: state }, action.id, action.element || createElementByType(action.elementType))
                }
            case 'merge':
                {
                    return mergeElement(state, action.id, action.element || createElementByType(action.elementType))
                }
            case 'nest':
                {
                    return nestElement({ childrenElement: state }, action.id)
                }
            case 'unnest':
                {
                    return unnestElement({ childrenElement: state }, action.id)
                }
            default:
                return state
        }
    }, [])

    const [variable, variableDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return action.value
            case 'push':
                {
                    return [...state, { ...action.variable, id: getRandomID() }]
                }
            case 'change':
                {
                    return state.map((item) => {
                        if (item.id !== action.variable.id) return item
                        else return {
                            ...item,
                            ...action.variable
                        }
                    })
                }
            case 'delete':
                {
                    return state.filter((item) => {
                        return item.id !== action.id
                    })
                }
            default: return state
        }
    }, [])

    const [event, eventDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return action.value
            case 'push':
                {
                    return [...state, { ...action.event, id: getRandomID() }]
                }
            case 'change':
                {
                    return state.map((item) => {
                        if (item.id !== action.event.id) return item
                        else return {
                            ...item,
                            ...action.event
                        }
                    })
                }
            case 'delete':
                {
                    return state.filter((item) => {
                        return item.id !== action.id
                    })
                }
            default: return state
        }
    }, [])

    const get = useCallback((key) => {
        let value = null
        variable.forEach((item) => {
            if (item.name === key) value = item
        })
        if (value) return value.value
        else return null
    }, [variable])

    const set = useCallback((key, value) => {
        let varItem = null
        variable.forEach((item) => {
            if (item.name === key) varItem = item
        })
        if (varItem) variableDispatch({ type: 'change', variable: { ...varItem, value } })

    }, [variable])

    const parseElementToComponent = useCallback((element, variable, event) => {
        const res = []
        element.forEach((item) => {
            let value = null
            let childrenElement = null
            let containerStyle = {}
            const variableArr = variable.filter((varItem) => {
                return varItem.bindElement === item.id
            })
            const variableAttr = {}
            variableArr.forEach((item) => {
                variableAttr[item.bind] = item.value
            })

            const eventArr = event.filter((eventItem) => {
                return eventItem.bindElement === item.id
            })
            const eventAttr = {}
            eventArr.forEach((item) => {
                let fn = () => { }
                if (item.type === 'setValue') {
                    if (item.setValue.useE) {
                        if (item.setValue.value === 'e') fn = (e) => { set(item.setValue.variable, e) }
                        if (item.setValue.value === 'e.target.value') fn = (e) => { set(item.setValue.variable, e.target.value) }
                        if (item.setValue.value === 'e.target.checked') fn = (e) => { set(item.setValue.variable, e.target.checked) }
                    }
                    else fn = () => { set(item.setValue.variable, item.setValue.newValue) }
                }
                else if (item.type === 'custom') {
                    // eslint-disable-next-line no-eval
                    fn = () => { eval(item.custom.code) }
                }
                else if (item.type === 'request') {
                    const { url, method, params, set } = item.request
                    xhrRequest(url, method, params)
                        .then((res) => {
                            if (set) {
                                const data = JSON.parse(res).data
                                variable.forEach(item => {
                                    if (data[item.name]) variableDispatch({ type: 'change', variable: { ...item, value: data[item.name] } })
                                });
                            }
                        })
                }
                else { }
                eventAttr[item.bindEvent] = fn
            })


            if (item.childrenElement) {
                childrenElement = parseElementToComponent(item.childrenElement, variable, event)
                containerStyle = {
                    style: item.style,
                    styleObject: item.styleObject,
                }
            }
            else if (item.type !== 'container') {
                const attribute = {
                    style: item.styleObject,
                    key: item.id,
                    ...item.attr,
                    ...variableAttr,
                    ...eventAttr
                }
                if (item.attr.html) {
                    if (attribute['children']) delete attribute['children']
                    attribute['dangerouslySetInnerHTML'] = { __html: item.attr.html }
                }
                value = React.cloneElement(
                    getComponentMap[item.type](),
                    attribute,

                );
            }
            res.push({
                value,
                id: item.id,
                childrenElement,
                ...containerStyle
            })
        })
        return res
    }, [set])

    const activeIndex = useMemo(() => {
        return findActiveIndex(element, activeElementID)
    }, [element, activeElementID])

    const activeElement = useMemo(() => {
        return findActiveElement(element, activeElementID)
    }, [element, activeElementID])

    const isElementActive = useMemo(() => {
        return activeElement ? true : false
    }, [activeElement])

    const component = useMemo(() => {
        return parseElementToComponent(element, variable, event)
    }, [element, variable, event, parseElementToComponent])
    const activeComponent = useMemo(() => {
        return findActiveComponent(component, activeElementID)
    }, [component, activeElementID])


    const [copyElement, setCopyElement] = useState(null)

    const getProjectDetail = useCallback(async (id) => {
        const res = await getProjectDetailRequest(id)
        if (!res) {
            navigate('/')
            return
        }
        setDetail(res.data)
        elementDispatch({ type: 'set', value: res.data.element })
        variableDispatch({ type: 'set', value: res.data.variable })
        eventDispatch({ type: 'set', value: res.data.event })
    }, [navigate])

    const setProjectDetail = useCallback(async () => {
        const res = await setProjectDetailRequest(detail, element, variable, event)
        if (!res) return
        successMessage('保存成功')
    }, [element, detail, variable, event])

    useEffect(() => {
        const id = searchParams.get('id')
        if (!id) navigate('/')
        else getProjectDetail(id)
    }, [searchParams, navigate, getProjectDetail])

    const getActiveElementParent = useCallback((el) => {
        let res = null
        for (let i = 0; i < el.childrenElement.length; i++) {
            const item = el.childrenElement[i]
            if (item.id === activeElementID) {
                res = el
                break
            }
            if (item.childrenElement) {
                res = getActiveElementParent(item)
                if (res) break
            }
        }
        return res
    }, [activeElementID])

    const activeElementParent = useMemo(() => {
        let res = getActiveElementParent({ childrenElement: element })
        if (res && !res.id) res = null
        return res
    }, [element, getActiveElementParent])




    return (
        <ElementContext.Provider
            value={{
                detail,
                component,
                element,
                elementDispatch,
                activeElementID,
                setActiveElementID,
                activeIndex,
                activeElement,
                activeComponent,
                setProjectDetail,
                isElementActive,
                copyElement,
                setCopyElement,
                createElementByElement,
                activeElementParent,
                setUnnestWhenDelete,
                unnestWhenDelete,
                variable,
                variableDispatch,
                event,
                eventDispatch,
                elementFloat,
                setElementFloat,
                get
            }}>
            {children}
        </ElementContext.Provider>
    );
};