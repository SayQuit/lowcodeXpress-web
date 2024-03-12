import '../../style/main.css'
import BoardConatiner from './component/boardContainer';
import { ElementContext } from '../../provider/elementProvider';
import { useContext, useRef } from 'react';

function ProjectBoard() {

    const boardRef=useRef(null)

    const { component, setActiveElementID } = useContext(ElementContext)
    return (
        <div className="main-board" onClickCapture={() => { setActiveElementID('') }} ref={boardRef}>
            {component.map((children) => {
                return (
                    <BoardConatiner key={children.id} id={children.id} componentNode={children} boardRef={boardRef}></BoardConatiner>
                )
            })}
            <BoardConatiner componentNode={''} boardRef={boardRef} id={-1}></BoardConatiner>
        </div>
    );
}

export default ProjectBoard;
