import { message } from 'antd';
const errorMessage = (msg) => {
    message.error(msg);
}
const successMessage=(msg)=>{
    message.success(msg)
}
export { errorMessage,successMessage }