
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getProjectDetailRequest } from '../../../request';
import { parseObjectToComponent } from '../utils/parser'

export const ElementContext = createContext();

export const ElementProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [detail, setDetail] = useState({})
    const [element, setElement] = useState([])
    // const [activeNode, setActiveNode] = useState(null)

    const getProjectDetail = useCallback(async (id) => {
        const res = await getProjectDetailRequest(id)
        if (!res) {
            navigate('/')
            return
        }
        setDetail(res.data)
        setElement(res.data.element)
    }, [navigate])

    const component = useMemo(() => {
        return parseObjectToComponent(element)
    }, [element])

    const elementPush = (type) => {
        setElement((prevElement) => {
            return [...prevElement, { type }];
        })
    }

    useEffect(() => {
        const id = searchParams.get('id')
        if (!id) navigate('/')
        else getProjectDetail(id)
    }, [searchParams, navigate, getProjectDetail])

    return (
        <ElementContext.Provider value={{ detail, elementPush, component }}>
            {children}
        </ElementContext.Provider>
    );
};