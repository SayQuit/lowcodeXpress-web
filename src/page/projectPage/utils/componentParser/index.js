import { getComponentMap } from "./getComponentMap";
import { componentMap,setComponentMap } from "./componentMap";

export const parseElementToComponent = (element) => {
    const map = {}
    const res = []
    element.forEach((item) => {
        if (componentMap[item.id]) {
            res.push({
                value: componentMap[item.id],
                id: item.id
            })
            map[item.id] = componentMap[item.id]
        }
        else {
            const component = getComponentMap[item.type]()
            res.push({
                value: component,
                id: item.id
            })
            map[item.id] = component
        }

    })
    setComponentMap(map)
    return res
}