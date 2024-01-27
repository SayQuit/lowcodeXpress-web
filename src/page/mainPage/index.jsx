import { NavLink } from 'react-router-dom';
import './index.css'
import { Card } from 'antd'
import { useEffect, useState } from 'react';
import { getProjectRequest } from '../../request';
import { useSelector } from 'react-redux';

function MainPage() {
  const user = useSelector(state => state.user)
  const [projectList, setProjectList] = useState([])
  useEffect(() => {
    getProjectList()
  }, [])
  const getProjectList = async () => {
    const res = await getProjectRequest()
    if (!res) return
    const { projectList: list } = res.data
    setProjectList(list.map(item => {
      const { createAt, id, json } = item
      return {
        id,
        createAt,
        ...JSON.parse(json)
        // 这里需要评估下element的问题
      }
    }))
  }

  return (
    <div className='mt-2 mb-2'>
      {user && <NavLink to={{ pathname: '/setup' }}>
        <div className='main-item'>
          <div className='main-item-block'>
            <Card bordered={true}>
              <div className='main-item-block-img'>
                <img src="https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg" alt="" />
              </div>
              <div className='main-item-block-title'>新建项目</div>
              <div className='main-item-block-desc'></div>
            </Card>
          </div>
        </div>
      </NavLink>}
      {!user && <NavLink to={{ pathname: '/login' }}>
        <div className='main-item'>
          <div className='main-item-block'>
            <Card bordered={true}>
              <div className='main-item-block-img'>
                <img src="https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg" alt="" />
              </div>
              <div className='main-item-block-title'>登录</div>
              <div className='main-item-block-desc'></div>
            </Card>
          </div>
        </div>
      </NavLink>}
      {
        projectList.map((item, index) =>
        (<div className='main-item' key={index}>
          <div className='main-item-block'>
            <Card bordered={true}>
              <div className='main-item-block-img'>
                <img src="https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg" alt="" />
              </div>
              <div className='main-item-block-title'>{item.name}</div>
              <div className='main-item-block-desc'>{item.desc}</div>
            </Card>
          </div>
        </div>))
      }
    </div>
  );
}

export default MainPage;
