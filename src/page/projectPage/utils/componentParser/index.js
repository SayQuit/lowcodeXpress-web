import { getComponentMap } from "./getComponentMap";
import React from "react";

export const parseElementToComponent = (element, variable) => {
    const res = []
    element.forEach((item) => {
        let value = null
        let childrenElement = null
        let containerStyle = {}
        const variableArr = variable.filter((varItem) => {
            return varItem.bindElement === item.id
        })
        const variableAttr={}
        variableArr.forEach((item)=>{
            variableAttr[item.bind]=item.value
        })
        if (item.childrenElement) {
            childrenElement = parseElementToComponent(item.childrenElement, variable)
            containerStyle = {
                style: item.style,
                styleObject: item.styleObject,
            }
        }
        else if (item.type !== 'container') {
            const attribute = {
                style: item.styleObject,
                key: item.id,
                ...item.attr,
                ...variableAttr
            }
            if (item.attr.html) {
                if (attribute['children']) delete attribute['children']
                attribute['dangerouslySetInnerHTML'] = { __html: item.attr.html }
            }
            value = React.cloneElement(
                getComponentMap[item.type](),
                attribute,

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