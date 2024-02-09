import '../../style/right.css'
import StyleSelector from './styleSelector';
import { Tabs } from 'antd';

function RightSider() {
    const onChange = (key) => {

    };
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
            <Tabs defaultActiveKey="container-style" items={items} onChange={onChange} size='large' type="card" centered />
            <StyleSelector></StyleSelector>
        </div>
    );
}

export default RightSider;
