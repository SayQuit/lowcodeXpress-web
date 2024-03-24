import { getRandomID } from "../../../utils/randomID"
import { elementMap } from "./elementGroup"
export const createElementByType = (type) => {
    const id = getRandomID()
    // todo 这里加一个业务组件的判断
    if (type.startsWith('echarts-')) {
        return {
            type,
            id,
            style: 'width:400px;height:400px;',
            styleObject: { width: '400px', height: '400px' },
            attr: elementMap[type].default,
            bindXElement:'',
            bindYElement:'',
            bindSeriesElement:''
        }
    }
    else if (type === 'circle') {
        return {
            type,
            id,
            style: '',
            styleObject: {},
            attr: elementMap[type].default,
            circleElement: [],
            target: []
        }
    }
    else {
        return {
            type,
            id,
            style: '',
            styleObject: {},
            attr: elementMap[type].default
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
        style: '',
        styleObject: {}
    }
}