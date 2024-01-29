import '../../index.css'
import BoardConatiner from './component/boardContainer';
import { ElementContext } from '../../provider/elementProvider';
import { useContext } from 'react';

function ProjectBoard() {

    const { component } = useContext(ElementContext)

    return (
        <div className="project-main-board">
            {component.map((children, index) => {
                return (
                    <BoardConatiner key={children.id} id={children.id}>
                        {children}
                    </BoardConatiner>
                )
            })}
            <BoardConatiner index={-1}></BoardConatiner>
        </div>
    );
}

export default ProjectBoard;
