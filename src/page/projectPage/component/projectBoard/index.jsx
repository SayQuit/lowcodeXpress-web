import '../../index.css'
import BoardConatiner from './component/boardContainer';
import { ElementContext } from '../../provider/elementProvider';
import { useContext } from 'react';

function ProjectBoard() {

    const { component } = useContext(ElementContext)
    console.log(component);

    return (
        <div className="project-main-board">
            {component.map((children) => {
                return (
                    <BoardConatiner key={children.id} id={children.id}>
                        {children.value}
                    </BoardConatiner>
                )
            })}
            <BoardConatiner id={-1}></BoardConatiner>
        </div>
    );
}

export default ProjectBoard;
