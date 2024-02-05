import '../../../../style/right.css'
import { Flex, InputNumber } from 'antd';

function HeightInput() {
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>高度</div>
            <InputNumber size='small' className='flex-1' addonAfter="px"></InputNumber>
        </Flex>
    );
}

export default HeightInput;
