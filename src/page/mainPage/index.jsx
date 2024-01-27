import './index.css'
import { useEffect, useState } from 'react';
import { getProjectRequest } from '../../request';
import { useSelector } from 'react-redux';
import NavCard from './component/navCard';

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
      {user && <NavCard pathname={'/setup'} projectID={''} title={'新建项目'} desc={''}></NavCard>}
      {!user && <NavCard pathname={'/login'} projectID={''} title={'登录'} desc={''}></NavCard>}
      {
        projectList.map((item, index) =>
          (<NavCard pathname={'/project'} projectID={''} title={item.name} desc={item.desc} key={index}></NavCard>))
      }
    </div>
  );
}

export default MainPage;
