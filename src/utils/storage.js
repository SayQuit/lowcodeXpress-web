
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
    return true
}

export const getLocalStorage = (key) => {
    const item = localStorage.getItem(key)
    return item
}

export const setToken = (value) => {
    localStorage.setItem('x_token', value)
    return true
}

export const getToken = () => {
    const item = localStorage.getItem('x_token')
    return item
}