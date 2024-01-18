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