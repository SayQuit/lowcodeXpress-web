import './index.css'
import LeftSider from './component/leftSider';
import RightSider from './component/rightSider';
import ProjectHeader from './component/projectHeader';
import ProjectBoard from './component/projectBoard';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';


function ProjectPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [element, setElement] = useState({})
  console.log(element);

  const getProjectDetail = useCallback(async () => {
    const res = null
    if (!res) return
    const { detail } = res.data
    setElement(detail)
  }, [])

  useEffect(() => {
    const searchParamsID = searchParams.get('id')
    if (!searchParamsID) navigate('/')
    else getProjectDetail()
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
