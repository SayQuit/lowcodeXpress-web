import './index.css'
import LeftSider from './component/leftSider';
import RightSider from './component/rightSider';
import ProjectHeader from './component/projectHeader';
import ProjectBoard from './component/projectBoard';

function ProjectPage() {
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
