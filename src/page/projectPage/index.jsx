import './index.css'
import LeftSider from './component/leftSider';
import RightSider from './component/rightSider';
import ProjectHeader from './component/projectHeader';
import ProjectBoard from './component/projectBoard';
import ProjectPageProvider from './provider/index';

function ProjectPage() {
  return (
    <ProjectPageProvider>
      <div className='project'>
        <LeftSider></LeftSider>
        <div className="project-main">
          <ProjectHeader></ProjectHeader>
          <ProjectBoard></ProjectBoard>
        </div>
        <RightSider></RightSider>
      </div>
    </ProjectPageProvider>

  );
}

export default ProjectPage;
