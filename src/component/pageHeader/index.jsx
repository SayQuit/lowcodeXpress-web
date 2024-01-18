import './index.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


function PageHeader() {
  return (
    <div className="pageHeader">
      <div className='pageHeader-main pageHeader-hover'>首页</div>
      <div className='flex'>
        <div className='pageHeader-button pageHeader-hover'>登录</div>
        <div className='pageHeader-button pageHeader-hover'>注册</div>
        <div className='pageHeader-avater'>
          <Avatar shape="square" icon={<UserOutlined />} />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
