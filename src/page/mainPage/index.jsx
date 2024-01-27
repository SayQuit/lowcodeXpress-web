import './index.css'
import { useEffect, useState } from 'react';
import { getProjectListRequest } from '../../request';
import { useSelector } from 'react-redux';
import NavCard from './component/navCard';

function MainPage() {
  const user = useSelector(state => state.user)
  const [projectList, setProjectList] = useState([])
  useEffect(() => {
    getProjectList()
  }, [])
  const getProjectList = async () => {
    const res = await getProjectListRequest()
    if (!res) return
    const { projectList: list } = res.data
    setProjectList(list)
  }

  return (
    <div className='mt-2 mb-2'>
      {user && <NavCard pathname={'/setup'} projectID={''} title={'新建项目'} desc={''}></NavCard>}
      {!user && <NavCard pathname={'/login'} projectID={''} title={'登录'} desc={''}></NavCard>}
      {
        projectList.map((item, index) =>
          (<NavCard pathname={'/project'} projectID={item.id} title={item.name} desc={item.desc} key={index}></NavCard>))
      }
    </div>
  );
}

export default MainPage;
