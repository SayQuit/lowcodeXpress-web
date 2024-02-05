import '../../../../style/right.css'
import { Flex, InputNumber } from 'antd';

function FontSize() {
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>字体大小</div>
            <InputNumber size='small' className='flex-1' addonAfter="px"></InputNumber>
        </Flex>
    );
}

export default FontSize;
