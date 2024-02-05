import '../../../style/left.css'
import { Flex } from 'antd';
import { useDrag } from 'react-dnd';

function ElementItem({ item }) {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: 'ELEMENT_ITEM',
        item: item,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));
    if (false && isDragging) { }
    return (
        <div className="element-item" ref={dragRef}>
            <Flex vertical className='pl-2 pr-2 content-box h-full' justify='space-evenly'>
                {item.icon}
                <div className='text-center'>{item.name}</div>
            </Flex>
        </div>
    );
}

export default ElementItem;
