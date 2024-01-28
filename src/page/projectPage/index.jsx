import './index.css'
import LeftSider from './component/leftSider';
import RightSider from './component/rightSider';
import ProjectHeader from './component/projectHeader';
import ProjectBoard from './component/projectBoard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ElementProvider } from './provider/useElement';

function ProjectPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ElementProvider>
        <div className='project'>
          <LeftSider></LeftSider>
          <div className="project-main">
            <ProjectHeader></ProjectHeader>
            <ProjectBoard></ProjectBoard>
          </div>
          <RightSider></RightSider>
        </div>
      </ElementProvider>
    </DndProvider>

  );
}

export default ProjectPage;
