import React, { useState, useContext, useEffect } from 'react';
import { Tabs, Empty } from 'antd';
import '../../style/right.css';
import StyleSelector from './styleSelector';
import AttrSelector from './attrSelector';
import ConfigSelector from './configSelector';
import CircleSelector from './circleSelector';
import { ElementContext } from '../../provider/elementProvider';
import OptionSelector from './optionSelector';
const regularTabs = [
    { key: 'style', label: '样式' },
    { key: 'attr', label: '属性' },
    { key: 'config', label: '配置' },
];
const circleTabs = [
    { key: 'style', label: '样式' },
    { key: 'circle', label: '循环依赖配置' },
    { key: 'config', label: '配置' },
];
const echartsOptionTabs = [
    { key: 'style', label: '样式' },
    { key: 'echarts-options', label: '图表配置' },
    { key: 'config', label: '配置' },
];
function RightSider() {
    const { isElementActive, activeElement } = useContext(ElementContext);
    const [activeKey, setActiveKey] = useState('style');
    const [tabsItems, setTabsItems] = useState([]);

    useEffect(() => {
        if (isElementActive && activeElement.type === 'circle') setTabsItems(circleTabs);
        else if (isElementActive && activeElement.type.startsWith('echarts-')) setTabsItems(echartsOptionTabs);
        else setTabsItems(regularTabs);
    }, [isElementActive, activeElement]);

    return (
        <div className="right">
            <Tabs
                defaultActiveKey={activeKey}
                items={tabsItems}
                onChange={setActiveKey}
                size='large'
                type="card"
                centered
            />
            {(isElementActive && activeElement.type === 'circle' && activeKey === 'circle') && <CircleSelector />}
            {(isElementActive && activeKey === 'style') && <StyleSelector />}
            {(isElementActive && activeKey === 'attr' && !activeElement.childrenElement) && <AttrSelector />}
            {(activeKey === 'config') && <ConfigSelector />}
            {(activeKey === 'echarts-options') && <OptionSelector />}
            {!isElementActive && activeKey !== 'config' && <Empty className='right-empty'></Empty>}
        </div>
    );
}

export default RightSider;
