import './index.css'
import LeftSider from './component/leftSider';
import RightSider from './component/rightSider';
import ProjectHeader from './component/projectHeader';
import ProjectBoard from './component/projectBoard';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';


function ProjectPage() {
  const [id, setID] = useState('')
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [element, setElement] = useState({})

  const getProjectDetail = useCallback(async () => {
    const res = null
    console.log(id);
    if (!res) return
    const { detail } = res.data
    setElement(detail)
  }, [id])

  useEffect(() => {
    const searchParamsID = searchParams.get('id')
    if (!searchParamsID) navigate('/')
    else {
      setID(searchParamsID)
      getProjectDetail()
    }
  }, [searchParams, navigate, getProjectDetail])
  return (
    <div className='project'>
      <LeftSider></LeftSider>
      <div className="project-main">
        <ProjectHeader></ProjectHeader>
        <ProjectBoard></ProjectBoard>
      </div>
      <RightSider></RightSider>
    </div>
  );
}

export default ProjectPage;
