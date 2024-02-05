import '../../style/right.css'
import ComponentSelector from './componentSelector';
import { Tabs } from 'antd';

function RightSider() {
    const onChange = (key) => {

    };
    const items = [
        {
            key: 'container-style',
            label: '容器样式',
        },
        {
            key: 'style',
            label: '样式',
        },
        {
            key: 'attr',
            label: '属性',
        },
    ];
    return (
        <div className="right">
            <Tabs defaultActiveKey="container-style" items={items} onChange={onChange} size='large' type="card" centered />
            <ComponentSelector></ComponentSelector>
        </div>
    );
}

export default RightSider;
