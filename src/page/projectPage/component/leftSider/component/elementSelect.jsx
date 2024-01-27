import '../../../index.css'
import { element } from '../utils/element'
import { Flex, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import ElementItem from './elementItem';
const { Search } = Input;

function ElementSelect({ onClose }) {
    return (
        <div className="element-select">
            <Flex justify='space-between'>
                <div className='font-bold leading-5'>选取元素</div>
                <CloseOutlined onClick={onClose} />
            </Flex>
            <Search placeholder="搜索元素" allowClear size='small' className='mt-2' />

            {element.map((item, index) => (
                <div key={index}>
                    <div className='mb-2 mt-6'>{item.title}</div>
                    {item.items.map((el,idx)=>(
                        <ElementItem item={el} key={idx}></ElementItem>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ElementSelect;
