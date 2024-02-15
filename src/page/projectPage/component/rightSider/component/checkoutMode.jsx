import '../../../style/right.css'
import { Flex, Checkbox } from 'antd';

function CheckoutMode({ onChange, defaultValue, name, type }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value: value.target.checked
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            <Checkbox size='small' className='flex-1' onChange={handleOnChange} checked={defaultValue}></Checkbox>
        </Flex>
    );
}

export default CheckoutMode;
