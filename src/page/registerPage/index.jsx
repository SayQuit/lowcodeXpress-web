import './index.css'
import { Button, Input } from 'antd';

function RegisterPage() {
    return (
        <div className='register'>
            <div className='register-block'>
                <div className="register-title">注册</div>
                <Input placeholder="输入用户名" className='mt-2' />
                <Input.Password placeholder="输入密码" className='mt-2' size='large' />
                <Input.Password placeholder="确认密码" className='mt-2' size='large' />
                <Button className='mt-2 w-full register-button' size='large'>注册</Button>
            </div>
        </div>
    );
}

export default RegisterPage;
