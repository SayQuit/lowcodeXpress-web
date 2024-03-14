import '../../../style/right.css'
import { Flex, Select } from 'antd';

function SelectMode({ onChange, value, name, type, options, tab }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            {tab === 'attr' && <div className='right-tab-font line-h-22'>{type}</div>}
            <Select size='small' className='flex-1' options={options} value={value} onChange={handleOnChange} allowClear></Select>
        </Flex>
    );
}

export default SelectMode;
