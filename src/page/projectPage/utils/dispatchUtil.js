export const replaceElement = (element, activeID, newElement) => {
    let res = []
    for (let i = 0; i < element.length; i++) {
        const item = element[i]
        if (item.childrenElement) res.push({
            ...item,
            childrenElement:replaceElement(item.childrenElement, activeID, newElement),
        })
        else {
            if (item.id === activeID) res.push(newElement)
            else res.push(item)
        }
    }
    return res
}