import { getComponentMap } from "./getComponentMap";
import React from "react";

export const parseElementToComponent = (element) => {
    const res = []
    element.forEach((item) => {
        let component = ''
        if (item.type !== 'container') {
            component = React.cloneElement(
                getComponentMap[item.type](),
                {
                    style: item.styleObject,
                    key: item.id,
                    ...item.attr
                }
            );
        }
        res.push({
            value: component,
            id: item.id
        })
    })
    return res
}