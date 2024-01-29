import { elementGroup } from "../elementGroup";
const getComponentMap = {}
const array = []
elementGroup.forEach((item) => {
    array.push(...item.items)
})
array.forEach((item) => {
    getComponentMap[item.type] = item.getComponent
})
const componentMap = {}
export const parseElementToComponent = (element) => {
    const res = []
    element.forEach((item) => {
        if (componentMap[item.id]) res.push(componentMap[item.id])
        else {
            const component = getComponentMap[item.type]()
            res.push(component)
            componentMap[item.id] = component
        }
    })
    return res
}