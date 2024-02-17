import { getRandomID } from "../../../utils/randomID"
export const replaceElement = (element, id, newElement) => {
    let res = []
    for (let i = 0; i < element.childrenElement.length; i++) {
        const item = element.childrenElement[i]
        if (item.id === id) {
            console.log(newElement);
            res.push(newElement)
        }
        else {
            if (item.childrenElement) {
                res.push({
                    ...item,
                    childrenElement: replaceElement(item, id, newElement)
                })
            }
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
    if (!element.childrenElement) return element
    for (let i = 0; i < element.childrenElement.length; i++) {
        const item = element.childrenElement[i]
        if (item.id === id) {
            if (offset === 0) res.push(newElement, item)
            else if (offset === 1) res.push(item, newElement)
            else res.push(item)
            console.log(res);
        }
        else if (item.childrenElement) res.push({
            ...item,
            childrenElement: insertElement(item, id, newElement, offset),
        })
        else res.push(item)
    }
    return res
}



export const deleteElement = (element, id, unnest) => {
    let res = []
    for (let i = 0; i < element.childrenElement.length; i++) {
        const item = element.childrenElement[i]
        if (item.id === id) continue
        else {
            if (item.childrenElement) {
                const childrenElement = deleteElement(item, id, unnest)
                if (childrenElement.length === 0) continue
                else if (childrenElement.length === 1 && unnest) res.push(childrenElement[0])
                else {
                    res.push({
                        ...item,
                        childrenElement
                    })
                }
            }
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
                    childrenElement: [item, newElement],
                    style: {},
                    styleObject: {}
                })
            }
            else res.push(item)
        }
    }
    return res
}