import service from "./service";

export const testRequest = () => {
    return new Promise((resolve, reject) => {
        service({
            url: '/test',
            method: 'post',
            params: {}
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const loginRequest = (account, password) => {
    return new Promise((resolve, reject) => {
        service({
            url: '/user/login',
            method: 'post',
            params: { account, password }
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const registerRequest = (username, password) => {
    return new Promise((resolve, reject) => {
        service({
            url: '/user/register',
            method: 'post',
            params: { username, password }
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const tokenLoginRequest = () => {
    return new Promise((resolve, reject) => {
        service({
            url: '/user/tokenLogin',
            method: 'post',
            params: {}
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const createProjectRequest = (json, name, description) => {
    return new Promise((resolve, reject) => {
        service({
            url: '/project/create',
            method: 'post',
            params: { json, name, description }
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const setProjectRequest = (id, json, name, description) => {
    return new Promise((resolve, reject) => {
        service({
            url: '/project/set',
            method: 'post',
            params: {id, json, name, description}
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const getProjectRequest = () => {
    return new Promise((resolve, reject) => {
        service({
            url: '/project/get',
            method: 'post',
            params: {}
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}