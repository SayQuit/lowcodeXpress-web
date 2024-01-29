
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getProjectDetailRequest } from '../../../request';
import { parseElementToComponent } from '../utils/parser'
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

    const elementPush = (type) => {
        const id = getRandomID()
        setElement((prevElement) => {
            return [...prevElement, { type, id }];
        })
    }

    return (
        <ElementContext.Provider value={{ detail, elementPush, component }}>
            {children}
        </ElementContext.Provider>
    );
};