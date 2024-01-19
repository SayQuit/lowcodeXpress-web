import './index.css'
import { useState, useMemo } from 'react';
import { Button, Input, Checkbox, Alert } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { NavLink,useNavigate } from 'react-router-dom';
import { passwordRegExp, accountRegExp } from '../../utils/regexp';
import { loginRequest } from '../../request';
import { successMessage } from '../../utils/message';

function LoginPage() {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState(false)

    const navigate=useNavigate()

    const warning = useMemo(() => {
        if (account.trim() === '' || password.trim() === '') return '部分信息未填写'
        else if (!accountRegExp(account)) return '账号不符合要求，必须是不包含空格的4到14位长度的字符串'
        else if (!passwordRegExp(password)) return '密码不符合要求，必须是至少包含一个数字和一个字母的8到16位字符串'
        else return ''
    }, [account, password])

    const onClickLogin=async ()=>{
        await loginRequest(account, password)
        successMessage('登录成功')
        navigate('/')
    }

    return (
        <div className='login'>
            <div className='login-block'>
                <div className="login-title">登录</div>
                <Input
                    value={account}
                    placeholder="输入账号"
                    className='mt-2'
                    size='large'
                    count={{
                        show: true,
                        max: 14,
                    }}
                    onChange={(e) => setAccount(e.target.value.trim())}
                />
                <Input.Password
                    value={password}
                    placeholder="输入密码"
                    className='mt-2'
                    size='large'
                    onChange={(e) => setPassword(e.target.value.trim())}
                />
                <div className="login-action mt-2 w-full">
                    <Checkbox value={rememberPassword} className='login-remember' onChange={(e) => setRememberPassword(e.target.value)}>记住密码</Checkbox>
                    <div className='login-forget'>忘记密码 <QuestionCircleOutlined /></div>
                </div>
                {warning && <Alert
                    message={warning}
                    type="warning"
                    showIcon
                    className='mt-2 login-alert'
                />}
                <Button className='mt-2 w-full login-button' size='large' disabled={warning} onClick={onClickLogin}>登录</Button>
                <div className="login-register w-full mt-2">
                    您还没有账号？
                    <NavLink to={{ pathname: '/register' }}><span>注册</span></NavLink>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
