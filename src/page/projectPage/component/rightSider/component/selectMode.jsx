import '../../../style/right.css'
import { Flex, Select } from 'antd';

function SelectMode({ onChange, defaultValue, name, type, options }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            <Select size='small' className='flex-1' options={options} defaultValue={defaultValue} onChange={handleOnChange}></Select>
        </Flex>
    );
}

export default SelectMode;
