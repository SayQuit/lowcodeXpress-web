import { useMemo, useState } from 'react';
import './index.css'
import { Button, Input, Alert } from 'antd';
import { passwordRegExp, usernameRegExp } from '../../utils/regexp';
import { registerRequest } from '../../request';
import { NavLink } from "react-router-dom"
import { successMessage } from '../../utils/message';

function RegisterPage() {
    const [username, setUsername] = useState('')
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const warning = useMemo(() => {
        if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') return '部分信息未填写'
        else if (password !== confirmPassword) return '密码不一致'
        else if (!passwordRegExp(password)) return '密码不符合要求，必须是至少包含一个数字和一个字母的8到16位字符串'
        else if (!usernameRegExp(username)) return '用户名不符合要求，必须是不包含空格的1到10位长度的字符串'
        else return ''
    }, [username, password, confirmPassword])

    const onClickRegister = async () => {
        const res = await registerRequest(username, password)
        setAccount(res.account)
        setIsSuccess(true)
    }

    const copyAccount = () => {
        navigator.clipboard.writeText(account)
            .then(() => {
                successMessage('复制成功')
            })
    }

    return (
        <div className='register'>
            <div className='register-block'>
                <div className="register-title">注册</div>
                {!isSuccess && <div>
                    <Input placeholder="输入用户名"
                        value={username}
                        className='mt-2'
                        size='large'
                        onChange={(e) => setUsername(e.target.value.trim())}
                        count={{
                            show: true,
                            max: 10,
                        }}
                    />
                    <Input.Password
                        value={password}
                        placeholder="输入密码"
                        className='mt-2'
                        size='large'
                        onChange={(e) => setPassword(e.target.value.trim())}
                    />
                    <Input.Password
                        value={confirmPassword}
                        placeholder="确认密码"
                        className='mt-2'
                        size='large'
                        onChange={(e) => setConfirmPassword(e.target.value.trim())}
                    />
                    {warning && <Alert
                        message={warning}
                        type="warning"
                        showIcon
                        className='mt-2 register-alert'
                    />}
                    <Button className='mt-2 w-full register-button' size='large' onClick={onClickRegister} disabled={warning}>注册</Button>
                </div>}
                {isSuccess && <div>
                    <Alert
                        message="注册成功"
                        description={`您的账号为 ${account}`}
                        type="success"
                        showIcon
                        className='mt-2'
                    />
                    <Button className='mt-2 w-full border' size='large' onClick={copyAccount}>复制账号</Button>
                    <NavLink to={{ pathname: '/login' }}>
                        <Button className='mt-2 w-full register-button' size='large'>前往登录</Button>
                    </NavLink>
                </div>}
            </div>
        </div>
    );
}

export default RegisterPage;
