import { getRandomID } from "../../../utils/randomID"
import { elementMap } from "./elementGroup"
export const createElementByType = (type) => {
    const id = getRandomID()
    return {
        type,
        id,
        style: '',
        styleObject: {},
        attr: elementMap[type].default
    }
}
export const createElementByElement = (el) => {
    return {
        ...el,
        id: getRandomID(),
        styleObject: { ...el.styleObject },
        attr: { ...el.attr }
    }
}
export const createNestElement=(childrenElement)=>{
    return {
        id: getRandomID(),
        childrenElement: childrenElement,
        style: {},
        styleObject: {}
    }
}