import '../../../style/main.css'
import { useContext, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { LeftSiderContext } from '../../../provider/leftSiderProvider';
import { ElementContext } from '../../../provider/elementProvider';
import InnerConatiner from './innerContainer';
function BoardConatiner({ children, index, id, childrenElement }) {

    const { onElementSelectVisibleChange, elementSelectVisible } = useContext(LeftSiderContext);
    const { elementDispatch, element, setActiveElementID, activeElementID } = useContext(ElementContext);

    const itemRef = useRef(null)

    const [dropArea, setDropArea] = useState('');

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'ELEMENT_ITEM',
        drop: (item) => {
            if (childrenElement) return
            setActiveElementID('')
            if (!children) {
                if (id === '') elementDispatch({ type: 'push', elementType: item.type })
                else elementDispatch({ type: 'replace', elementType: item.type, index })
            }
            else {
                if (dropArea === 'top') elementDispatch({ type: 'insert', elementType: item.type, index: index })
                else if (dropArea === 'bottom') elementDispatch({ type: 'insert', elementType: item.type, index: index + 1 })
                else if (dropArea === 'middle') elementDispatch({ type: 'merge', elementType: item.type, index: index })
                else { }
            }
        },
        hover: (_, monitor) => {
            const y = monitor.getClientOffset().y;
            const height = itemRef.current.clientHeight;
            const top = itemRef.current.getBoundingClientRect().top;
            const third = top + height / 3;
            const twoThird = top + 2 * (height / 3);
            let area
            if (y < third) area = 'top'
            else if (y >= third && y <= twoThird) area = 'middle'
            else if (y > twoThird) area = 'bottom'
            else area = ''
            setDropArea(area);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }), [element, elementDispatch, dropArea]);

    return (
        <div
            className=
            {`board-container ${isOver ? 'board-container-hover' : ''} 
            ${isOver && children ? `${dropArea === 'top' ? 'board-container-top' : ''}` : ''}
            ${isOver && children ? `${dropArea === 'bottom' ? 'board-container-bottom' : ''}` : ''}
            ${isOver && children ? `${dropArea === 'middle' ? 'board-container-right' : ''}` : ''}
            ${activeElementID === id && children ? 'board-container-active' : ''}`}
            ref={dropRef}
        >
            <div ref={itemRef} onClick={() => { if (!childrenElement) setActiveElementID(id) }}>
                {children && children}
                {childrenElement &&
                    childrenElement.map((item) => {
                        return <InnerConatiner childrenElement={item.childrenElement} id={item.id}>{item.value}</InnerConatiner>
                    })
                }
                {
                    (!childrenElement && !children) && <div
                        className='board-container-tips'
                        onClick={onElementSelectVisibleChange}>
                        {elementSelectVisible ? '拖拽元素至此处' : '点击添加元素'}
                    </div>
                }
            </div>
        </div>
    );
}

export default BoardConatiner;
