
import React, { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getProjectDetailRequest, setProjectDetailRequest } from '../../../request';
import { successMessage } from '../../../utils/message';
import { findActiveElement, findActiveComponent, findActiveIndex } from '../utils/findActive';
import { pushElement, replaceElement, insertElement, deleteElement, mergeElement, nestElement, unnestElement } from '../utils/elementDispatchUtil';
import { createElementByType, createElementByElement, createElementByNestElement } from '../utils/elementCreate';
import { getRandomID } from '../../../utils/randomID';
import { getComponentMap } from '../utils/getComponentMap'
import { xhrRequest } from '../utils/xhrRequest';
import { replaceRpxWithPx } from '../../../utils/style';
import { filterProperties } from '../../../utils/object';

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

    const [props, propsDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return action.value
            case 'push':
                {
                    return [...state, { ...action.props, id: getRandomID() }]
                }
            case 'change':
                {
                    return state.map((item) => {
                        if (item.id !== action.props.id) return item
                        else return {
                            ...item,
                            ...action.props
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

    const [onload, setOnload] = useState('')

    const variableMap = useMemo(() => {
        const map = {}
        variable.map((item) => {
            return map[item.name] = item
        })
        return map
    }, [variable])

    const propsMap = useMemo(() => {
        const map = {}
        props.map((item) => {
            return map[item.name] = item
        })
        return map
    }, [props])

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

    const eventMap = useMemo(() => {
        const map = {}
        event.map((item) => {
            return map[item.name] = item
        })
        return map
    }, [event])

    const get = useCallback((key) => {
        return variableMap[key] || propsMap[key] || null
    }, [variableMap, propsMap])

    const set = useCallback((key, value) => {
        let varItem = get(key)
        if (varItem) variableDispatch({ type: 'change', variable: { ...varItem, value } })
    }, [get])

    const createFunction = useCallback((item) => {
        let fn = () => { }
        if (item.type === 'setValue') {
            if (item.setValue.useE) {
                if (item.setValue.newValue === 'e') fn = (e) => { set(item.setValue.variable, e) }
                if (item.setValue.newValue === 'e.target.value') fn = (e) => { set(item.setValue.variable, e.target.value) }
                if (item.setValue.newValue === 'e.target.checked') fn = (e) => { set(item.setValue.variable, e.target.checked) }
            }
            else fn = () => { set(item.setValue.variable, item.setValue.newValue) }
        }
        else if (item.type === 'custom') {
            // eslint-disable-next-line no-eval
            fn = () => { eval(item.custom.code) }
        }
        else if (item.type === 'request') {
            const { url, method, params, set } = item.request
            const param = {}
            variable.forEach((variableItem) => {
                params.forEach((paramsItem) => {
                    if (paramsItem === variableItem.name) {
                        param[paramsItem] = variableItem.value
                    }
                })
            })
            fn = () => {
                // todo return promise
                xhrRequest(url, method, param)
                    .then((res) => {
                        if (set) {
                            const data = JSON.parse(res).data
                            variable.forEach(item => {
                                if (data[item.name]) variableDispatch({ type: 'change', variable: { ...item, value: data[item.name] } })
                            });
                        }
                    })
            }
        }
        else { }
        return fn
    }, [set, variable])

    const parseElementToComponent = useCallback((element, variable, event, props) => {
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


            const propsArr = props.filter((varItem) => {
                return varItem.bindElement === item.id
            })
            const propsAttr = {}
            propsArr.forEach((item) => {
                propsAttr[item.bind] = item.value
            })

            const eventArr = event.filter((eventItem) => {
                return eventItem.bindElement === item.id
            })
            const eventAttr = {}
            eventArr.forEach((item) => {
                eventAttr[item.bindEvent] = createFunction(item)
            })


            if (item.type === 'nest') {
                childrenElement = parseElementToComponent(item.childrenElement, variable, event, props)
                containerStyle = {
                    style: item.style,
                    styleObject: item.styleObject,
                }
            }
            else if (item.type.startsWith('echarts-')) {
                const properties = ['color', 'fontStyle', 'fontWeight', 'fontFamily', 'fontSize', 'verticalAlign', 'lineHeight', 'backgroundColor', 'borderColor', 'borderWidth', 'borderRadius', 'padding', 'width', 'height', 'overflow']
                const nameTextStyle = filterProperties(replaceRpxWithPx({ styleObject: item.styleObject }).styleObject, properties)
                const attribute = {
                    key: item.id,
                    ...item.attr,
                    option: {
                        ...item.attr.option,
                        xAxis: {
                            ...item.attr.option.xAxis,
                            nameTextStyle
                        },
                        yAxis: {
                            ...item.attr.option.yAxis,
                            nameTextStyle
                        }
                    },
                    ...variableAttr,
                    ...eventAttr,
                    ...propsAttr,
                    echartsStyle: replaceRpxWithPx({ styleObject: item.styleObject }).styleObject
                }
                value = React.cloneElement(
                    getComponentMap[item.type](),
                    attribute,
                );
            }
            else if (item.type !== 'container' && item.type !== 'circle') {
                const attribute = {
                    style: replaceRpxWithPx({ styleObject: item.styleObject }).styleObject,
                    key: item.id,
                    ...item.attr,
                    ...variableAttr,
                    ...eventAttr,
                    ...propsAttr
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
            else if (item.type === 'circle' && item.target.length) {
                let value
                if (variableMap[item.circleVariableName]) value = variableMap[item.circleVariableName].value || []
                else if (propsMap[item.circleVariableName]) value = propsMap[item.circleVariableName].value || []
                else value = []

                const temp = []

                value.forEach((item2) => {
                    let copied = item.circleElement.childrenElement ? createElementByNestElement(item.circleElement) : createElementByElement(item.circleElement)
                    item.target.forEach((item3) => {
                        let from = item2
                        let to = copied
                        item3.fromArray.forEach((item4) => {
                            from = from[item4]
                        })
                        item3.toArray.forEach((item4, index) => {
                            if (index <= item3.toArray.length - 2) to = to[item4]
                        })
                        const lastKey = item3.toArray[item3.toArray.length - 1]
                        to[lastKey] = from

                    })
                    temp.push(copied)
                })

                childrenElement = parseElementToComponent(temp, variable, event, props)
                containerStyle = {
                    style: item.style,
                    styleObject: item.styleObject,
                }
            };
            res.push({
                type: item.type,
                value,
                id: item.id,
                childrenElement,
                ...replaceRpxWithPx(containerStyle)
            })
        })
        return res
    }, [variableMap, propsMap, createFunction])

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
        return parseElementToComponent(element, variable, event, props)
    }, [element, variable, event, parseElementToComponent, props])
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
        setOnload(res.data.onload)
        elementDispatch({ type: 'set', value: res.data.element })
        variableDispatch({ type: 'set', value: res.data.variable })
        propsDispatch({ type: 'set', value: res.data.props })
        eventDispatch({ type: 'set', value: res.data.event })
    }, [navigate])

    const setProjectDetail = useCallback(async () => {
        const res = await setProjectDetailRequest(detail, element, variable, event, props, onload)
        if (!res) return
        successMessage('保存成功')
    }, [element, detail, variable, event, props, onload])

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

    const pasteCircleElement = () => {
        elementDispatch({ type: 'replace', id: activeElement.id, element: { ...activeElement, circleElement: copyElement } })
    }

    const [previewRef, setPreviewRef] = useState(null)
    useEffect(() => {
        if (!previewRef) return
        const messageData = {
            element,
            variable,
            event,
            props,
            onload
        };
        previewRef.postMessage(messageData, '*');
    }, [element, variable, event, props, detail, previewRef, onload])

    useEffect(() => {
        if (onload && eventMap[onload]) createFunction(eventMap[onload])()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onload])


    const openPreviewPage = () => {
        const previewRef = window.open(`http://localhost:3000/#/preview?id=${detail.id}`);
        previewRef.addEventListener('load', function () {
            const messageData = {
                element,
                variable,
                event,
                props,
            };
            previewRef.postMessage(messageData, `http://localhost:3000/#/preview?id=${detail.id}`);
        });

        setPreviewRef(previewRef);
    }

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
                createElementByNestElement,
                activeElementParent,
                setUnnestWhenDelete,
                unnestWhenDelete,
                variable,
                variableDispatch,
                event,
                eventDispatch,
                elementFloat,
                setElementFloat,
                get,
                pasteCircleElement,
                variableMap,
                props,
                propsDispatch,
                propsMap,
                openPreviewPage,
                onload,
                setOnload
            }}>
            {children}
        </ElementContext.Provider>
    );
};