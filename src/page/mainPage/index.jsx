import './index.css'
import { Card } from 'antd'
import { FileAddOutlined } from '@ant-design/icons';

function MainPage() {
  return (
    <div className='mt-2 mb-2'>
      {
        [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3, 4, 5].map((item,index) =>
        (<div className='mainPage-item' key={index}>
          <div className='mainPage-item-block'>
            <Card title="项目名称" bordered={true}>
              <div className='mainPage-item-block-content'>项目描述{item}</div>
            </Card>
          </div>
        </div>))
      }
      <div className='mainPage-item'>
        <div className='mainPage-item-block'>
          <Card title="新建项目" bordered={true}>
            <div className='mainPage-item-block-content'>
              <FileAddOutlined className='mainPage-addIcon'></FileAddOutlined>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
