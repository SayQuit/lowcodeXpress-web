import { getComponentMap } from "./getComponentMap";
import React from "react";

export const parseElementToComponent = (element) => {
    const res = []
    element.forEach((item) => {
        let value = null
        let childrenElement = null
        let containerStyle = {}
        if (item.childrenElement) {
            childrenElement = parseElementToComponent(item.childrenElement)
            containerStyle = {
                style: item.style,
                styleObject: item.styleObject
            }
        }
        else if (item.type !== 'container') {
            const attribute = {
                style: item.styleObject,
                key: item.id,
                ...item.attr,
            }
            if (item.attr.html && attribute['children']) {
                delete attribute['children']
                attribute['dangerouslySetInnerHTML'] = { __html: item.attr.html }
            }
            value = React.cloneElement(
                getComponentMap[item.type](),
                attribute
            );
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