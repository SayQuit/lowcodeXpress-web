
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getProjectDetailRequest } from '../../../request';
import { parseElementToComponent } from '../utils/componentParser'
import { getRandomID } from '../../../utils/randomID';

export const ElementContext = createContext();

export const ElementProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [detail, setDetail] = useState({})
    const [element, setElement] = useState([])
    // const [activeNode, setActiveNode] = useState(null)

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
        setElement(res.data.element)
    }, [navigate])

    useEffect(() => {
        const id = searchParams.get('id')
        if (!id) navigate('/')
        else getProjectDetail(id)
    }, [searchParams, navigate, getProjectDetail])

    const createElement = (type) => {
        const id = getRandomID()
        return { type, id }
    }

    const elementPush = (type) => {
        setElement([...element, createElement(type)])
    }

    const elementInsert = (type, index) => {
        const prev = element.slice(0, index)
        const next = element.slice(index)
        setElement([...prev, createElement(type), ...next])
    }

    return (
        <ElementContext.Provider value={{ detail, component, element, elementPush, elementInsert }}>
            {children}
        </ElementContext.Provider>
    );
};