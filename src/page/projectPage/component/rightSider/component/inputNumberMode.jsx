import '../../../style/right.css'
import { Flex, InputNumber } from 'antd';

function InputNumberMode({ onChange, defaultValue, addonAfter, name, type, tab }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{tab === 'attr' ? name + ' ' + type : name}</div>
            <InputNumber size='small' className='flex-1' addonAfter={addonAfter} onChange={handleOnChange} defaultValue={defaultValue}></InputNumber>
        </Flex>
    );
}

export default InputNumberMode;
