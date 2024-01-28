import { element } from "../element";
const keyValueElement = {}
const array = []
element.forEach((item) => {
    array.push(...item.items)
})
array.forEach((item) => {
    keyValueElement[item.type] = item.component
})
export const parseObjectToComponent = (object) => {
    const res = []
    object.forEach((item) => {
        console.log(item);
        res.push(keyValueElement[item.type]())
    })
    return res
}