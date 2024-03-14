import '../../style/main.css'
import BoardConatiner from './component/boardContainer';
import { ElementContext } from '../../provider/elementProvider';
import { useContext, useRef } from 'react';

function ProjectBoard() {

    const boardRef = useRef(null)

    const { component, setActiveElementID, detail } = useContext(ElementContext)
    return (
        <div onClickCapture={() => { setActiveElementID('') }} ref={boardRef} className={detail.type === 'wechat mini program' ? 'main-board mini-750-rpx' : 'main-board'}>
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
