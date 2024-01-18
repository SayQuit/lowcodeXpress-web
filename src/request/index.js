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

export const loginRequest = () => {
    return new Promise((resolve, reject) => {
        service({
            url: '/user/login',
            method: 'post',
            params: {}
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const registerRequest = () => {
    return new Promise((resolve, reject) => {
        service({
            url: '/user/register',
            method: 'post',
            params: {}
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

export const createProjectRequest = () => {
    return new Promise((resolve, reject) => {
        service({
            url: '/project/create',
            method: 'post',
            params: {}
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const setProjectRequest = () => {
    return new Promise((resolve, reject) => {
        service({
            url: '/project/set',
            method: 'post',
            params: {}
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