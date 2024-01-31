import '../../../index.css'
import { useContext, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { LeftSiderContext } from '../../../provider/leftSiderProvider';
import { ElementContext } from '../../../provider/elementProvider';
function BoardConatiner({ children, index }) {

    const { onElementSelectVisibleChange, elementSelectVisible } = useContext(LeftSiderContext);
    const { elementDispatch, element } = useContext(ElementContext);

    const itemRef = useRef(null)

    const [offset, setOffset] = useState(0);

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'ELEMENT_ITEM',
        drop: (item) => {
            if (!children) elementDispatch({ type: 'push', elementType: item.type })
            else elementDispatch({ type: 'insert', elementType: item.type, index: index + offset })
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
    }), [element, elementDispatch, offset]);

    return (
        <div className={`board-container ${isOver ? 'board-container-hover' : ''} ${isOver && children ? `${offset === 0 ? 'board-container-top' : 'board-container-bottom'}` : ''}`} ref={dropRef}>
            <div ref={itemRef}>
                {children
                    ? children
                    :
                    <div
                        className='board-container-tips'
                        onClick={onElementSelectVisibleChange}>
                        {elementSelectVisible ? '点击隐藏左边选取栏或拖拽元素至此处' : '点击添加元素'}
                    </div>}
            </div>
        </div>
    );
}

export default BoardConatiner;
