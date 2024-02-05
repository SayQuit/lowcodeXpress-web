import '../../../../style/right.css'
import { Flex, Select } from 'antd';

function FontPosition() {
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>文字位置</div>
            <Select size='small' className='flex-1'></Select>
        </Flex>
    );
}

export default FontPosition;
