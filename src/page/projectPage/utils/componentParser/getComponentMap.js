import { elementGroup } from "../elementGroup";
export const getComponentMap = {}

const initGetComponentMap = () => {
    const array = []
    elementGroup.forEach((item) => {
        array.push(...item.items)
    })
    array.forEach((item) => {
        getComponentMap[item.type] = item.getComponent
    })
}

initGetComponentMap()