import service from "./service";
import { errorMessage } from "../utils/message";

export const testRequest = async () => {
    let res = null
    try {
        res = await service.post('/test', {})
    } catch (error) {
        errorMessage('请求失败')
    } finally {
        return res || null
    }
}

export const loginRequest = async (account, password) => {
    let res = null
    try {
        res = await service.post('/user/login', { account, password })
    } catch (error) {
        errorMessage('登录失败，请重试')
    } finally {
        return res || null
    }
}

export const registerRequest = async (username, password) => {
    let res = null
    try {
        res = await service.post('/user/register', { username, password })
    } catch (error) {
        errorMessage('注册失败，请重试')
    } finally {
        return res || null
    }
}

export const tokenLoginRequest = async () => {
    let res = null
    try {
        res = await service.post('/user/tokenLogin', {})
    } finally {
        return res || null
    }
}

export const createProjectRequest = async (element, name, description, type, tech, lib) => {
    let res = null
    try {
        res = await service.post('/project/create', { element, name, description, type, tech, lib })
    } catch (error) {
        errorMessage('创建失败，请重试')
    } finally {
        return res || null
    }
}

export const setProjectDetailRequest = async (detail, element, variable, event, props, onload) => {
    let res = null
    try {
        res = await service.post('/project/set', { ...detail, element, variable, event, props, onload })
    } catch (error) {
        errorMessage('保存失败，请重试')
    } finally {
        return res || null
    }
}

export const getProjectListRequest = async () => {
    let res = null
    try {
        res = await service.post('/project/list', {})
    } finally {
        return res || null
    }
}

export const getProjectDetailRequest = async (id) => {
    let res = null
    try {
        res = await service.post('/project/detail', { id })
    } finally {
        return res || null
    }
}

export const createOnlineRequest = async (id) => {
    let res = null
    try {
        res = await service.post('/online/create', { id })
    } finally {
        return res || null
    }
}

export const getOnlineListRequest = async () => {
    let res = null
    try {
        res = await service.post('/online/list')
    } finally {
        return res || null
    }
}

export const getOnlineDetailRequest = async (id) => {
    let res = null
    try {
        res = await service.post('/online/detail', { id })
    } finally {
        return res || null
    }
}

export const exportFileRequest = async (id) => {
    try {
        const res = await service.post('/export', { id }, { responseType: 'blob' });
        const blob = new Blob([res.data], { type: res.headers['content-type'] });

        const contentDisposition = res.headers['content-disposition'];
        const match = contentDisposition && contentDisposition.match(/attachment; filename=([^"]+)/);
        const filename = match ? match[1] : `${id}.jsx`;

        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            const link = document.createElement('a');

            link.href = window.URL.createObjectURL(blob);
            link.setAttribute('download', filename);

            if (typeof link.download === 'undefined') {
                link.setAttribute('target', '_blank');
            }

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    } catch (error) {
        console.error(error);
    }
};
