export const findActiveElement = (element, activeID) => {
    let res = null
    console.log(element,activeID);
    for (let i = 0; i < element.length; i++) {
        const item = element[i]
        if (activeID === item.id) {
            res = item
            break
        }
        else {
            if (item.childrenElement) res = findActiveElement(item.childrenElement, activeID)
            if (res) break
        }
    }
    return res
}

export const findActiveComponent = (component, activeID) => {
    let res = null
    for (let i = 0; i < component.length; i++) {
        const item = component[i]
        if (activeID === item.id) {
            res = item
            break
        }
        else {
            if (item.childrenElement) res = findActiveComponent(item.childrenElement, activeID)
            if (res) break
        }
    }
    return res
}

export const findActiveIndex = (element, activeID) => {
    let res = null
    for (let i = 0; i < element.length; i++) {
        const item = element[i]
        if (activeID === item.id) {
            res = i
            break
        }
        else {
            if (item.childrenElement) res = findActiveElement(item.childrenElement, activeID)
            if (res) {
                res = i
                break
            }
        }
    }
    return res
}