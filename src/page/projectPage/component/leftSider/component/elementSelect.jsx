import '../../../style/left.css'
import { elementGroup } from '../../../utils/elementGroup'
import { useContext } from 'react';
import { Flex, Input } from 'antd';
import { ElementContext } from '../../../provider/elementProvider';
import { CloseOutlined } from '@ant-design/icons';
import ElementItem from './elementItem';
const { Search } = Input;

function ElementSelect({ onClose }) {

    const { detail } = useContext(ElementContext)

    return (
        <div className="element-select">
            <Flex justify='space-between'>
                <div className='font-bold leading-5'>选取元素</div>
                <CloseOutlined onClick={onClose} />
            </Flex>
            <Search placeholder="搜索元素" allowClear size='small' className='mt-2' />

            {elementGroup.map((item) => (
                (detail.dragGroup.includes(item.type)) &&
                <div key={item.type}>
                    <div className='mb-2 mt-6'>{item.title}</div>
                    {item.items.map(el => (
                        (
                            !(detail.tech === 'vue' && (el.attrSelector.includes('items') || el.type === 'ant-colorpicker'))
                        ) && <ElementItem item={el} key={el.type}></ElementItem>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ElementSelect;
