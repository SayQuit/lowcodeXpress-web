
import React, { createContext, useState,useContext } from 'react';
import { ElementContext } from './elementProvider';

export const LeftSiderContext = createContext();

export const LeftSiderProvider = ({ children }) => {
    const { setActiveElementID } = useContext(ElementContext)

    const [elementSelectVisible, setElementSelectVisible] = useState(false)
    const onElementSelectVisibleChange = () => {
        setActiveElementID('')
        setElementSelectVisible(!elementSelectVisible)
    }
    return (
        <LeftSiderContext.Provider value={{ elementSelectVisible, onElementSelectVisibleChange }}>
            {children}
        </LeftSiderContext.Provider>
    );
};