import './index.css'
import { useEffect, useState } from 'react';
import { getProjectListRequest } from '../../request';
import { useSelector } from 'react-redux';
import NavCard from '../../component/navCard';

function MainPage() {
  const user = useSelector(state => state.user)
  const [list, setList] = useState([])
  useEffect(() => {
    getProjectList()
  }, [])
  const getProjectList = async () => {
    const res = await getProjectListRequest()
    if (!res) return
    const { list } = res.data
    setList(list)
  }

  return (
    <div className='mt-2 mb-2'>
      {user && <NavCard pathname={'/setup'} projectID={''} title={'新建项目'} description={''} tags={[]}></NavCard>}
      {!user && <NavCard pathname={'/login'} projectID={''} title={'登录'} description={''} tags={[]}></NavCard>}
      {
        list.map((item) =>
          (<NavCard pathname={'/project'} projectID={item.id} title={item.name} description={item.description} tags={item.tags} key={item.id}></NavCard>))
      }
    </div>
  );
}

export default MainPage;
