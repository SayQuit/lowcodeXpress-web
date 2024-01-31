
import React, { createContext, useState } from 'react';

export const LeftSiderContext = createContext();

export const LeftSiderProvider = ({ children }) => {

    const [elementSelectVisible, setElementSelectVisible] = useState(false)
    const onElementSelectVisibleChange = () => {
        setElementSelectVisible(!elementSelectVisible)
    }
    return (
        <LeftSiderContext.Provider value={{ elementSelectVisible, onElementSelectVisibleChange }}>
            {children}
        </LeftSiderContext.Provider>
    );
};