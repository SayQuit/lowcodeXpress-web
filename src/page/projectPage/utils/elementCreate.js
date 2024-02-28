import { getRandomID } from "../../../utils/randomID"
import { elementMap } from "./elementGroup"
export const createElementByType = (type) => {
    const id = getRandomID()
    if(type!=='circle'){
        return {
            type,
            id,
            style: '',
            styleObject: {},
            attr: elementMap[type].default
        }
    }
    else {
        return {
            type,
            id,
            style: '',
            styleObject: {},
            attr: elementMap[type].default,
            circleElement:[],
            circleArrayVariableName:'',
            circleArrayKey:'',
            target:[]
        }
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
export const createElementByNestElement = (el) => {
    return {
        ...el,
        id: getRandomID(),
        styleObject: { ...el.styleObject },
        childrenElement: el.childrenElement.map((item) => {
            const child = item.type === 'nest' ? createElementByNestElement(item) : createElementByElement(item)
            return child
        })
    }
}
export const createNestElement = (childrenElement) => {
    return {
        type: 'nest',
        id: getRandomID(),
        childrenElement: childrenElement,
        style: {},
        styleObject: {}
    }
}