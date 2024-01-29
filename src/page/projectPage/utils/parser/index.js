import { elementGroup } from "../elementGroup";
const getComponentMap = {}
const array = []
elementGroup.forEach((item) => {
    array.push(...item.items)
})
array.forEach((item) => {
    getComponentMap[item.type] = item.getComponent
})
let componentMap = {}
export const parseElementToComponent = (element) => {
    const map = {}
    const res = []
    element.forEach((item) => {
        if (componentMap[item.id]) {
            res.push(componentMap[item.id])
            map[item.id] = componentMap[item.id]
        }
        else {
            const component = getComponentMap[item.type]()
            res.push(component)
            map[item.id] = component
        }

    })
    componentMap = map
    return res
}