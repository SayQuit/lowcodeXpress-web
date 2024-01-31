
import React, { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getProjectDetailRequest, setProjectDetailRequest } from '../../../request';
import { parseElementToComponent } from '../utils/componentParser'
import { getRandomID } from '../../../utils/randomID';
import { successMessage } from '../../../utils/message';

export const ElementContext = createContext();

export const ElementProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [detail, setDetail] = useState({})


    const createElement = (type) => {
        const id = getRandomID()
        return { type, id }
    }

    const [activeElementID, setActiveElementID] = useState('')

    const [element, elementDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return action.value
            case 'push':
                {
                    setActiveElementID('')
                    return [...state, createElement(action.elementType)]
                }
            case 'insert':
                {
                    setActiveElementID('')
                    return [...state.slice(0, action.index), createElement(action.elementType), ...state.slice(action.index)]
                }
            case 'delete':
                {
                    setActiveElementID('')
                    return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
                }
            default:
                return state
        }
    }, [])


    const activeIndex = useMemo(() => {
        let idx = -1
        element.forEach((item, index) => {
            if (item.id === activeElementID) idx = index
        });
        return idx
    }, [element, activeElementID])
    const activeElement = useMemo(() => {
        let node = null
        element.forEach(item => {
            if (item.id === activeElementID) node = item
        });
        return node
    }, [element, activeElementID])

    const component = useMemo(() => {
        return parseElementToComponent(element)
    }, [element])
    const activeComponent = useMemo(() => {
        let comp = null
        component.forEach(item => {
            if (item.id === activeElementID) comp = item
        });
        return comp
    }, [component, activeElementID])

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

    return (
        <ElementContext.Provider value={{ detail, component, element, elementDispatch, activeElementID, setActiveElementID, activeIndex, activeElement, activeComponent, setProjectDetail }}>
            {children}
        </ElementContext.Provider>
    );
};