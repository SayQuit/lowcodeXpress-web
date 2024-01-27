import '../../../index.css'
import { Flex } from 'antd';

function ElementItem({item}) {
    console.log(item);
    return (
        <div className="element-item">
            <Flex vertical className='pl-2 pr-2 content-box h-full' justify='space-evenly'>
                {item.component}
                <div className='text-center'>{item.name}</div>
            </Flex>
        </div>
    );
}

export default ElementItem;
