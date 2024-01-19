import service from "./service";
import { getToken, setToken } from "../utils/storage";

export const testRequest = () => {
    return new Promise((resolve, reject) => {
        service.post('/test', {})
            .then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
    })
}

export const loginRequest = (account, password) => {
    return new Promise((resolve, reject) => {
        service.post('/user/login', { account, password })
            .then((res) => {
                const { account, token, username } = res.data
                setToken(token)
                // 更新redux
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
    })
}

export const registerRequest = (username, password) => {
    return new Promise((resolve, reject) => {
        service.post('/user/register', { username, password })
            .then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
    })
}

export const tokenLoginRequest = () => {
    return new Promise((resolve, reject) => {
        service.post('/user/tokenLogin', {})
            .then((res) => {
                const { account, username } = res.data
                const token = getToken()
                // 更新redux
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
    })
}

export const createProjectRequest = (json, name, description) => {
    return new Promise((resolve, reject) => {
        service.post('/project/create', { json, name, description })
            .then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
    })
}

export const setProjectRequest = (id, json, name, description) => {
    return new Promise((resolve, reject) => {
        service.post('/project/set', { id, json, name, description })
            .then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
    })
}

export const getProjectRequest = () => {
    return new Promise((resolve, reject) => {
        service.post('/project/get', {})
            .then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
    })
}