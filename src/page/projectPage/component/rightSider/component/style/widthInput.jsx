import '../../../../style/right.css'
import { Flex, InputNumber } from 'antd';

function WidthInput({ onChange, value }) {
    const handleOnChange = (val) => {
        onChange({
            type: 'width',
            value: `${val}px`
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>宽度</div>
            <InputNumber size='small' className='flex-1' addonAfter="px" onChange={handleOnChange} defaultValue={value}></InputNumber>
        </Flex>
    );
}

export default WidthInput;
