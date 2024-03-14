import { useState } from 'react';
import '../../../style/right.css'
import { Flex, InputNumber, Select } from 'antd';

function InputNumberMode({ onChange, value, name, type, tab, initialAddonAfter }) {
    const [addonAfter, setAddonAfter] = useState(initialAddonAfter)
    const handleOnChange = (value, newAddonAfter) => {
        setAddonAfter(prev => (newAddonAfter || addonAfter));
        onChange({
            type,
            value,
            addonAfter: newAddonAfter || addonAfter
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            {tab === 'attr' && <div className='right-tab-font line-h-22'>{type}</div>}
            <InputNumber size='small' className='flex-1' onChange={handleOnChange} value={value}></InputNumber>
            <Select onChange={(e) => { handleOnChange(value, e) }} className='w-12 ml-2' options={[{ value: 'px', label: 'px' }, { value: '%', label: '%' }, { value: 'rpx', label: 'rpx' }]} size='small' value={addonAfter}></Select>
        </Flex>
    );
}

export default InputNumberMode;
