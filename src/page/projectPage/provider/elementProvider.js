
import React, { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getProjectDetailRequest } from '../../../request';
import { parseElementToComponent } from '../utils/componentParser'
import { getRandomID } from '../../../utils/randomID';

export const ElementContext = createContext();

export const ElementProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [detail, setDetail] = useState({})


    const createElement = (type) => {
        const id = getRandomID()
        return { type, id }
    }
    const [element, elementDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return action.value
            case 'push':
                return [...state, createElement(action.elementType)]
            case 'insert':
                return [...state.slice(0, action.index), createElement(action.elementType), ...state.slice(action.index)]
            default:
                return state
        }
    }, [])


    const component = useMemo(() => {
        return parseElementToComponent(element)
    }, [element])

    const getProjectDetail = useCallback(async (id) => {
        const res = await getProjectDetailRequest(id)
        if (!res) {
            navigate('/')
            return
        }
        setDetail(res.data)
        elementDispatch({ type: 'set', value: res.data.element })
    }, [navigate])

    useEffect(() => {
        const id = searchParams.get('id')
        if (!id) navigate('/')
        else getProjectDetail(id)
    }, [searchParams, navigate, getProjectDetail])

    return (
        <ElementContext.Provider value={{ detail, component, element, elementDispatch }}>
            {children}
        </ElementContext.Provider>
    );
};