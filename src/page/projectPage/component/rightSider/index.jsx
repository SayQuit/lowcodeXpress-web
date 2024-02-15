import { useState, useContext } from 'react';
import '../../style/right.css'
import StyleSelector from './styleSelector';
import AttrSelector from './attrSelector'
import { Tabs, Empty } from 'antd';
import { ElementContext } from '../../provider/elementProvider';

function RightSider() {
    const { isElementActive } = useContext(ElementContext)
    const [activeKey, setActiveKey] = useState('style')
    const items = [
        {
            key: 'style',
            label: '样式',
        },
        {
            key: 'config',
            label: '配置',
        },
        {
            key: 'container-style',
            label: '容器样式',
        },
        {
            key: 'attr',
            label: '属性',
        },
    ];
    return (
        <div className="right">
            <Tabs defaultActiveKey={activeKey} items={items} onChange={(key) => { setActiveKey(key) }} size='large' type="card" centered />
            {activeKey === 'style' && <StyleSelector></StyleSelector>}
            {activeKey === 'attr' && <AttrSelector></AttrSelector>}
            {!isElementActive && <Empty className='right-empty'></Empty>}
        </div>
    );
}

export default RightSider;
