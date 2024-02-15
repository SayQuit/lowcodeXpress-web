import '../../../style/main.css'
import { useContext, useRef, useState, useEffect } from 'react';
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

    useEffect(() => {
        setHeight(itemRef.current.clientHeight)
        setWidth(itemRef.current.offsetWidth)
    }, [itemRef, element, elementSelectVisible])

    const handleResize = () => {
        setHeight(itemRef.current.clientHeight)
        setWidth(itemRef.current.offsetWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'ELEMENT_ITEM',
        drop: (item) => {
            setActiveElementID('')
            // 直接添加最内部，外部的添加功能 加一个按钮获取父元素
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
                    ${isOver && children ? `${dropArea === 'top' ? 'board-container-top' : ''}` : ''}
                    ${isOver && children ? `${dropArea === 'bottom' ? 'board-container-bottom' : ''}` : ''}
                    ${isOver && children ? `${dropArea === 'middle' ? 'board-container-right' : ''}` : ''}
                    ${activeElementID === id && children ? 'board-container-active' : ''}`}
                ref={dropRef}
                style={{ height: height + 'px', width: width + 'px' }}
                onClick={() => { if (!childrenElement) setActiveElementID(id) }}
            >
            </div>
            <div ref={itemRef}>
                {children && children}
                {childrenElement && <InnerConatiner childrenElement={childrenElement} />}
                {
                    (!childrenElement && !children) && <div
                        className='board-container-tips'
                        onClick={onElementSelectVisibleChange}>
                        {elementSelectVisible ? '拖拽元素至此处' : '点击添加元素'}
                    </div>
                }
            </div>
        </>
    )

}

export default InnerConatiner;
