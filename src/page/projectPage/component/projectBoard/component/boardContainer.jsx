import '../../../style/main.css'
import { useContext, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { LeftSiderContext } from '../../../provider/leftSiderProvider';
import { ElementContext } from '../../../provider/elementProvider';
function BoardConatiner({ children, index, id }) {

    const { onElementSelectVisibleChange, elementSelectVisible } = useContext(LeftSiderContext);
    const { elementDispatch, element, setActiveElementID, activeElementID } = useContext(ElementContext);

    const itemRef = useRef(null)

    const [offset, setOffset] = useState(0);

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'ELEMENT_ITEM',
        drop: (item) => {
            setActiveElementID('')
            if (!children) {
                if (id === '') elementDispatch({ type: 'push', elementType: item.type })
                else elementDispatch({ type: 'replace', elementType: item.type, index })
            }
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
        <div
            className=
            {`board-container ${isOver ? 'board-container-hover' : ''} 
            ${isOver && children ? `${offset === 0 ? 'board-container-top' : 'board-container-bottom'}` : ''}
            ${isOver && children ? `${offset === 0 ? 'board-container-top' : 'board-container-bottom'}` : ''}
            ${activeElementID === id && children ? 'board-container-active' : ''}`}
            ref={dropRef}
        >
            <div ref={itemRef} onClick={() => setActiveElementID(id)}>
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
