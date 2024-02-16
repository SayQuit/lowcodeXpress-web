import { getRandomID } from "../../../utils/randomID"
export const replaceElement = (element, id, newElement) => {
    let res = []
    for (let i = 0; i < element.length; i++) {
        const item = element[i]
        if (item.childrenElement) res.push({
            ...item,
            childrenElement: replaceElement(item.childrenElement, id, newElement),
        })
        else {
            if (item.id === id) res.push(newElement)
            else res.push(item)
        }
    }
    return res
}

export const pushElement = (element, id, newElement) => {
    let res = []
    for (let i = 0; i < element.length; i++) {
        const item = element[i]
        if (item.childrenElement) {
            if (item.id === id) {
                item.childrenElement.push(newElement)
                res.push(item)
            }
            else {
                res.push({
                    ...item,
                    childrenElement: pushElement(item.childrenElement, id, newElement)
                })
            }
        }
        else res.push(item)
    }
    return res
}


export const insertElement = (element, id, newElement, offset) => {
    let res = []
    for (let i = 0; i < element.length; i++) {
        const item = element[i]
        if (item.childrenElement) res.push({
            ...item,
            childrenElement: insertElement(item.childrenElement, id, newElement, offset),
        })
        else {
            if (item.id === id) {
                if (offset === 0) res.push(newElement, item)
                else if (offset === 1) res.push(item, newElement)
                else res.push(item)
            }
            else res.push(item)
        }
    }
    return res
}



export const deleteElement = (element, id) => {
    let res = []
    for (let i = 0; i < element.length; i++) {
        const item = element[i]
        if (item.childrenElement) {
            const childrenElement = deleteElement(item.childrenElement, id)
            // 这里后面要改吗？
            if (childrenElement.length === 0) continue
            else if (childrenElement.length === 1) res.push(childrenElement[0])
            else {
                res.push({
                    ...item,
                    childrenElement
                })
            }
        }
        else {
            if (item.id === id) continue
            else res.push(item)
        }
    }
    return res
}

export const mergeElement = (element, id, newElement) => {
    let res = []
    for (let i = 0; i < element.length; i++) {
        const item = element[i]
        if (item.childrenElement) res.push({
            ...item,
            childrenElement: mergeElement(item.childrenElement, id, newElement),
        })
        else {
            if (item.id === id) {
                res.push({
                    id: getRandomID(),
                    childrenElement: [item, newElement]
                })
            }
            else res.push(item)
        }
    }
    return res
}