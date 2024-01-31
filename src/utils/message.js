import { message, Modal } from 'antd';
const { confirm } = Modal;

const errorMessage = (msg) => {
    message.error(msg);
}
const successMessage = (msg) => {
    message.success(msg)
}
const confirmMessage = (msg) => {
    return new Promise((resolve, reject) => {
        confirm({
            content: msg,
            onOk() {
                resolve(true)
            },
            onCancel() {
                reject(false)
            },
        });
    })
}
export { errorMessage, successMessage, confirmMessage }