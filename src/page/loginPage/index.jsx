import './index.css'
import { Button, Input, Checkbox } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

function LoginPage() {
    return (
        <div className='login'>
            <div className='login-block'>
                <div className="login-title">登录</div>
                <Input placeholder="输入账号" className='mt-2' />
                <Input placeholder="输入密码" className='mt-2' />
                <div className="login-action mt-2 w-full">
                    <Checkbox className='login-remember'>记住密码</Checkbox>
                    <div className='login-forget'>忘记密码 <QuestionCircleOutlined /></div>
                </div>
                <Button className='mt-2 w-full login-button'>登录</Button>
                <div className="login-register w-full mt-2">您还没有账号？<span>注册</span></div>
            </div>
        </div>
    );
}

export default LoginPage;
