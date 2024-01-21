import './index.css'
import { Avatar } from 'antd';
import { UserOutlined,LogoutOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PageHeader() {

  const user = useSelector(state => state.user)

  return (
    <div className="pageHeader">
      <NavLink className='pageHeader-button' to={{ pathname: '/' }}>首页</NavLink>
      <div className='flex'>
        {!user && <NavLink className='pageHeader-button' to={{ pathname: '/login' }}>登录</NavLink>}
        {!user && <NavLink className='pageHeader-button' to={{ pathname: '/register' }}>注册</NavLink>}
        <div className='pageHeader-button mr-2'>{user.username}</div>
        {user && <div className='pageHeader-avater'>
          <Avatar shape="square" icon={<UserOutlined />} />
        </div>}
        {user && <div className='pageHeader-avater'>
          <Avatar shape="square" icon={<LogoutOutlined />} />
        </div>}
      </div>
    </div>
  );
}

export default PageHeader;
