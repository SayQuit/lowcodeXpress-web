import '../../../index.css'
import { useContext, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { LeftSiderContext } from '../../../provider/leftSiderProvider';
import { ElementContext } from '../../../provider/elementProvider';
function BoardConatiner({ children, index }) {

    const { onElementSelectVisibleChange } = useContext(LeftSiderContext);
    const { elementPush } = useContext(ElementContext);

    const itemRef = useRef(null)

    const [offset, setOffset] = useState(0);

    const handleInsertElement = (type) => {
        console.log(type, offset, index);
    }

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'ELEMENT_ITEM',
        drop: (item) => {
            if (!children) elementPush(item.type)
            else handleInsertElement(item.type)
        },
        hover: (_, monitor) => {
            const y = monitor.getClientOffset().y;
            const height = itemRef.current.clientHeight;
            const top = itemRef.current.getBoundingClientRect().top;
            const middle = top + height / 2;
            setOffset(y > middle ? 1 : 0);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div className={`board-container ${isOver ? 'board-container-hover' : ''} ${isOver && children ? `${offset === 0 ? 'board-container-top' : 'board-container-bottom'}` : ''}`} ref={dropRef}>
            <div ref={itemRef}>
                {children
                    ? children
                    :
                    <div
                        className='board-container-tips'
                        onClick={onElementSelectVisibleChange}>
                        点击添加元素
                    </div>}
            </div>
        </div>
    );
}

export default BoardConatiner;
