import '../../../index.css'
import { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { LeftSiderContext } from '../../../provider/leftSiderProvider';
import { ElementContext } from '../../../provider/elementProvider';

function BoardConatiner({ children }) {

    const { onElementSelectVisibleChange } = useContext(LeftSiderContext);
    const { elementPush } = useContext(ElementContext);

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'ELEMENT_ITEM',
        drop: (item) => { if (!children) elementPush(item.type) },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div className={`board-container ${isOver ? 'board-container-hover' : ''}`} ref={dropRef}>
            {children ? children : <div className="board-container-tips" onClick={onElementSelectVisibleChange}>点击添加元素</div>}
        </div>
    );
}

export default BoardConatiner;
