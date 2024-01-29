import '../index.css'
import { Tabs, Flex, InputNumber, Select } from 'antd';

function RightSider() {
    const onChange = (key) => {
    };
    const items = [
        {
            key: '1',
            label: 'Tab 1',
        },
        {
            key: '2',
            label: 'Tab 2',
        },
        {
            key: '3',
            label: 'Tab 3',
        },
    ];
    return (
        <div className="project-right">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} size='large' type="card" centered />
            <Flex gap="small" vertical className='project-right-tab'>
                <Flex>
                    <div className='project-right-tab-font line-h-22'>高度</div>
                    <InputNumber size='small' className='flex-1' addonAfter="px"></InputNumber>
                </Flex>
                <Flex>
                    <div className='project-right-tab-font line-h-22'>高度</div>
                    <Select size='small' className='flex-1'></Select>
                </Flex>
            </Flex>
        </div>
    );
}

export default RightSider;
