
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getProjectDetailRequest } from '../../../request';
import { parseObjectToComponent } from '../utils/parser'

export const ElementContext = createContext();

export const ElementProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [detail, setDetail] = useState({})
    const [element, setElement] = useState([])
    const [component, setComponent] = useState([])
    // const [activeNode, setActiveNode] = useState(null)

    const getProjectDetail = useCallback(async (id) => {
        const res = await getProjectDetailRequest(id)
        if (!res) {
            navigate('/')
            return
        }
        setDetail(res.data)
        setElement([{ type: 'text', attr: { style: 'font-size:24px;' } }, { type: 'container' },])
    }, [navigate])

    useEffect(() => {
        console.log(element);
        setComponent(parseObjectToComponent(element))
    }, [element])

    const elementPush = (item) => {
        const { type } = item
        const newElm = [...element]
        newElm.splice(element.length-1, 1)
        newElm.push({ type }, { type: 'container' })
        console.log(newElm);
        setElement(newElm)
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