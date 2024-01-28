import '../../../index.css'
import { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { LeftSiderContext } from '../../../provider/leftSiderProvider';

function BoardConatiner({ handleDrop, children }) {

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'ELEMENT_ITEM',
        drop: (item) => handleDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const { onElementSelectVisibleChange } = useContext(LeftSiderContext);

    return (
        <div className={`board-container ${isOver ? 'board-container-hover' : ''}`} ref={dropRef} onClick={onElementSelectVisibleChange}>
            <div className="board-container-tips">点击添加元素</div>
        </div>
    );
}

export default BoardConatiner;
