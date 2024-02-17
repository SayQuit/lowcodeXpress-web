
import React, { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getProjectDetailRequest, setProjectDetailRequest } from '../../../request';
import { parseElementToComponent } from '../utils/componentParser'
import { getRandomID } from '../../../utils/randomID';
import { successMessage } from '../../../utils/message';
import { elementMap } from '../utils/elementGroup';
import { findActiveElement, findActiveComponent, findActiveIndex } from '../utils/findActive';
import { pushElement, replaceElement, insertElement, deleteElement, mergeElement } from '../utils/dispatchUtil';

export const ElementContext = createContext();

export const ElementProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [detail, setDetail] = useState({})


    const createElementByType = (type) => {
        const id = getRandomID()
        return {
            type,
            id,
            style: '',
            styleObject: {},
            attr: elementMap[type].default
        }
    }
    const createElementByElement = (el) => {
        return {
            ...el,
            id: getRandomID(),
            styleObject: { ...el.styleObject },
            attr: { ...el.attr }
        }
    }

    const [activeElementID, setActiveElementID] = useState('')
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
            default:
                return state
        }
    }, [])


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
        return parseElementToComponent(element)
    }, [element])
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
    }, [navigate])

    const setProjectDetail = useCallback(async () => {
        const res = await setProjectDetailRequest(detail, element)
        if (!res) return
        successMessage('保存成功')
    }, [element, detail])

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
                unnestWhenDelete
            }}>
            {children}
        </ElementContext.Provider>
    );
};