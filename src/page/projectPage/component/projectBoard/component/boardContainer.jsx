import '../../../style/main.css'
import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { LeftSiderContext } from '../../../provider/leftSiderProvider';
import { ElementContext } from '../../../provider/elementProvider';
import { warningMessage } from '../../../../../utils/message';
function BoardConatiner({ componentNode, boardRef }) {


    const { onElementSelectVisibleChange, elementSelectVisible } = useContext(LeftSiderContext);
    const { elementDispatch, element, setActiveElementID, activeElementID } = useContext(ElementContext);

    const itemRef = useRef(null)

    const [dropArea, setDropArea] = useState('');

    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    const setContainerRect = useCallback(() => {
        if (!itemRef || !itemRef.current || !boardRef || !boardRef.current) return;
        const parentRect = boardRef.current.getBoundingClientRect();
        const { top, left } = itemRef.current.getBoundingClientRect();
        const scrollTop = boardRef.current.scrollTop
        setHeight(itemRef.current.clientHeight);
        setWidth(itemRef.current.offsetWidth);
        setTop(top - parentRect.top + scrollTop);
        setLeft(left - parentRect.left);
    }, [itemRef, boardRef]);

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
            if (!componentNode) {
                elementDispatch({ type: 'push', elementType: item.type })
                return
            }
            if (componentNode.childrenElement) return
            if (!componentNode.value && !componentNode.childrenElement) {
                if (item.type === 'container') {
                    warningMessage('请勿重复防止容器')
                    return
                }
                elementDispatch({ type: 'replace', elementType: item.type, id: componentNode.id })
                return
            }
            setActiveElementID('')
            if (dropArea === 'top') elementDispatch({ type: 'insert', elementType: item.type, id: componentNode.id, offset: 0 })
            else if (dropArea === 'bottom') elementDispatch({ type: 'insert', elementType: item.type, id: componentNode.id, offset: 1 })
            else if (dropArea === 'middle') elementDispatch({ type: 'merge', elementType: item.type, id: componentNode.id })
            else return
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
                {`board-container ${isOver ? 'board-container-hover' : ''} 
                ${componentNode && (componentNode.value || componentNode.childrenElement) && isOver ? `${dropArea === 'top' ? 'board-container-top' : ''}` : ''} 
                ${componentNode && (componentNode.value || componentNode.childrenElement) && isOver ? `${dropArea === 'bottom' ? 'board-container-bottom' : ''}` : ''} 
                ${componentNode && (componentNode.value || componentNode.childrenElement) && isOver ? `${dropArea === 'middle' ? 'board-container-right' : ''}` : ''} 
                ${isOver || (componentNode && activeElementID === componentNode.id) ? 'board-container-active' : ''}`}
                ref={dropRef}
                style={{ height: height + 'px', width: width + 'px', top: top + 'px', left: left + 'px' }}
                onClick={() => { if (componentNode) setActiveElementID(componentNode.id) }}
            >
            </div>
            {
                componentNode &&
                <React.Fragment>
                    {componentNode.value && React.cloneElement(componentNode.value, { ref: itemRef })}
                    {componentNode.childrenElement &&
                        <div ref={itemRef} style={componentNode.styleObject}>
                            {
                                componentNode.childrenElement.map((item) => {
                                    return <BoardConatiner componentNode={item} key={item.id} boardRef={boardRef}></BoardConatiner>
                                })
                            }
                        </div>
                    }

                </React.Fragment>
            }
            {
                (!componentNode || (!componentNode.value && !componentNode.childrenElement)) &&
                <div
                    ref={itemRef}
                    className='board-container-tips'
                    onClick={onElementSelectVisibleChange}>
                    {elementSelectVisible ? '拖拽元素至此处' : '点击添加元素'}
                </div>
            }

        </>
    );
}

export default BoardConatiner;
