import '../../../../style/right.css'
import { Flex, InputNumber } from 'antd';

function WidthInput() {
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>宽度</div>
            <InputNumber size='small' className='flex-1' addonAfter="px"></InputNumber>
        </Flex>
    );
}

export default WidthInput;
