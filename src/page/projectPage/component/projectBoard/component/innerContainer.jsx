import '../../../style/main.css'
import React, { useCallback,useContext, useRef, useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { LeftSiderContext } from '../../../provider/leftSiderProvider';
import { ElementContext } from '../../../provider/elementProvider';
function InnerConatiner({ childrenElement, children, id }) {

    const { onElementSelectVisibleChange, elementSelectVisible } = useContext(LeftSiderContext);
    const { elementDispatch, element, setActiveElementID, activeElementID } = useContext(ElementContext);

    const itemRef = useRef(null)

    const [dropArea, setDropArea] = useState('');

    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    const setContainerRect = useCallback(() => {
        if (!itemRef || !itemRef.current) return;
        const parentElement = itemRef.current.parentNode;
        const parentRect = parentElement.getBoundingClientRect();
        const { top, left } = itemRef.current.getBoundingClientRect();
        setHeight(itemRef.current.clientHeight);
        setWidth(itemRef.current.offsetWidth);
        setTop(top - parentRect.top);
        setLeft(left - parentRect.left);
    }, [itemRef]);

    useEffect(() => {
        setContainerRect()
    }, [itemRef, element, elementSelectVisible, setContainerRect])

    useEffect(() => {
        window.addEventListener('resize', setContainerRect);
        setTimeout(() => {
            setContainerRect()
        }, 1000);
        return () => {
            window.removeEventListener('resize', setContainerRect);
        };
    }, [setContainerRect]);


    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'ELEMENT_ITEM',
        drop: (item) => {
            if (childrenElement) return
            setActiveElementID('')
            if (!children) elementDispatch({ type: 'replace', elementType: item.type, id })
            else {
                if (dropArea === 'top') elementDispatch({ type: 'insert', elementType: item.type, id, offset: 0 })
                else if (dropArea === 'bottom') elementDispatch({ type: 'insert', elementType: item.type, id, offset: 1 })
                else if (dropArea === 'middle') elementDispatch({ type: 'merge', elementType: item.type, id })
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
        <>
            <div
                className=
                {`board-container ${isOver ? 'board-container-hover' : ''} ${isOver && children ? `${dropArea === 'top' ? 'board-container-top' : ''}` : ''} ${isOver && children ? `${dropArea === 'bottom' ? 'board-container-bottom' : ''}` : ''} ${isOver && children ? `${dropArea === 'middle' ? 'board-container-right' : ''}` : ''} ${activeElementID === id && children ? 'board-container-active' : ''}`}
                ref={dropRef}
                style={{ height: height + 'px', width: width + 'px', top: top + 'px', left: left + 'px' }}
                onClick={() => { if (!childrenElement) setActiveElementID(id) }}
            >
            </div>
            {children && React.cloneElement(children, { ref: itemRef })}
            {childrenElement && childrenElement.map((item) => {
                return <InnerConatiner childrenElement={item.childrenElement} id={item.id} key={item.id}>{item.value}</InnerConatiner>
            })}
            {
                (!childrenElement && !children) && <div
                    ref={itemRef}
                    className='board-container-tips'
                    onClick={onElementSelectVisibleChange}>
                    {elementSelectVisible ? '拖拽元素至此处' : '点击添加元素'}
                </div>
            }
        </>
    )

}

export default InnerConatiner;
