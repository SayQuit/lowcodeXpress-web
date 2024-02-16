import { getComponentMap } from "./getComponentMap";
import React from "react";

export const parseElementToComponent = (element) => {
    const res = []
    element.forEach((item) => {
        let value = null
        let childrenElement = null
        let containerStyle={}
        if (item.childrenElement) {
            childrenElement = parseElementToComponent(item.childrenElement)
            containerStyle={
                style:item.style,
                styleObject:item.styleObject
            }
        }
        else {
            if (item.type !== 'container') {
                value = React.cloneElement(
                    getComponentMap[item.type](),
                    {
                        style: item.styleObject,
                        key: item.id,
                        ...item.attr
                    }
                );
            }
        }
        res.push({
            value,
            id: item.id,
            childrenElement,
            ...containerStyle
        })
    })
    return res
}