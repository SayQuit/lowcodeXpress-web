import '../../../style/right.css'
import { Flex, InputNumber } from 'antd';

function InputNumberMode({ onChange, value, addonAfter, name, type, tab }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{tab === 'attr' ? name + ' ' + type : name}</div>
            <InputNumber size='small' className='flex-1' addonAfter={addonAfter} onChange={handleOnChange} value={value}></InputNumber>
        </Flex>
    );
}

export default InputNumberMode;
