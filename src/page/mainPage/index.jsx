import { NavLink } from 'react-router-dom';
import './index.css'
import { Card } from 'antd'

function MainPage() {
  return (
    <div className='mt-2 mb-2'>
      <NavLink to={{ pathname: '/setup' }}>
        <div className='mainPage-item'>
          <div className='mainPage-item-block'>
            <Card bordered={true}>
              <div className='mainPage-item-block-img'>
                <img src="https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg" alt="" />
              </div>
              <div className='mainPage-item-block-title'>新建项目</div>
              <div className='mainPage-item-block-desc'></div>
            </Card>
          </div>
        </div>
      </NavLink>
      {
        [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3, 4, 5].map((item, index) =>
        (<div className='mainPage-item' key={index}>
          <div className='mainPage-item-block'>
            <Card bordered={true}>
              <div className='mainPage-item-block-img'>
                <img src="https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg" alt="" />
              </div>
              <div className='mainPage-item-block-title'>项目标题</div>
              <div className='mainPage-item-block-desc'>项目描述{item}</div>
            </Card>
          </div>
        </div>))
      }
    </div>
  );
}

export default MainPage;
