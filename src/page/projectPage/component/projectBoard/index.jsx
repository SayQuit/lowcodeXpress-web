import '../../style/main.css'
import BoardConatiner from './component/boardContainer';
import { ElementContext } from '../../provider/elementProvider';
import { useContext } from 'react';

function ProjectBoard() {

    const { component,setActiveElementID } = useContext(ElementContext)



    return (
        <div className="main-board" onClickCapture={()=>{setActiveElementID('')}}>
            {component.map((children, index) => {
                return (
                    <BoardConatiner key={children.id} id={children.id} index={index}>
                        {children.value}
                    </BoardConatiner>
                )
            })}
            <BoardConatiner id={''}></BoardConatiner>
        </div>
    );
}

export default ProjectBoard;
