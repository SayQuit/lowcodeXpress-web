import '../../../../style/right.css'
import { Flex, InputNumber } from 'antd';

function FontSize({ onChange, value }) {
    const handleOnChange = (val) => {
        onChange({
            type: 'fontSize',
            value: `${val}px`
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>字体大小</div>
            <InputNumber size='small' className='flex-1' addonAfter="px" onChange={handleOnChange} defaultValue={value}></InputNumber>
        </Flex>
    );
}

export default FontSize;
