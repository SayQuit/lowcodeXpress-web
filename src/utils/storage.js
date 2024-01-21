
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
    return true
}

export const getLocalStorage = (key) => {
    const item = localStorage.getItem(key)
    return item
}

export const setLocalToken = (value) => {
    localStorage.setItem('x_token', value)
    return true
}

export const getLocalToken = () => {
    const item = localStorage.getItem('x_token')
    return item
}