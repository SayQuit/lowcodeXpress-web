import '../../../../style/right.css'
import { Flex, Select } from 'antd';

function DisplayWay() {
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>布局方式</div>
            <Select size='small' className='flex-1'></Select>
        </Flex>
    );
}

export default DisplayWay;
