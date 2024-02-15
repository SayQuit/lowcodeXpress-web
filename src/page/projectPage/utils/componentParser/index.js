import { getComponentMap } from "./getComponentMap";
import { elementMap } from '../elementGroup'
import React from "react";

export const parseElementToComponent = (element) => {
    const res = []
    element.forEach((item) => {
        const component = React.cloneElement(
            getComponentMap[item.type](),
            {
                style: item.styleObject,
                key: item.id,
                ...elementMap[item.type].default,
                ...item.attr
            }
        );
        item.attr = {
            ...elementMap[item.type].default,
            ...item.attr
        }
        res.push({
            value: component,
            id: item.id
        })
    })
    return res
}