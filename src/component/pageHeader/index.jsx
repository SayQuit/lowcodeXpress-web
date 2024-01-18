import './index.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

function PageHeader() {
  return (
    <div className="pageHeader">
      <NavLink className='pageHeader-button' to={{ pathname: '/' }}>首页</NavLink>
      <div className='flex'>
        <NavLink className='pageHeader-button' to={{ pathname: '/login' }}>登录</NavLink>
        <NavLink className='pageHeader-button' to={{ pathname: '/register' }}>注册</NavLink>
        <div className='pageHeader-avater'>
          <Avatar shape="square" icon={<UserOutlined />} />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
