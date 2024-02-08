import { getComponentMap } from "./getComponentMap";
import React from "react";

export const parseElementToComponent = (element) => {
    const res = []
    element.forEach((item) => {
        const component = React.cloneElement(getComponentMap[item.type](), { style: item.styleObject ,key: item.id });
        res.push({
            value: component,
            id: item.id
        })
    })
    return res
}