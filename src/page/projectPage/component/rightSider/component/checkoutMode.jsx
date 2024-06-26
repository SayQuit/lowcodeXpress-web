import '../../../style/right.css'
import { Flex, Checkbox } from 'antd';

function CheckoutMode({ onChange, value, name, type, tab }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value: value.target.checked
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            {tab === 'attr' && <div className='right-tab-font line-h-22'>{type}</div>}
            <Checkbox size='small' className='flex-1' onChange={handleOnChange} checked={value}></Checkbox>
        </Flex>
    );
}

export default CheckoutMode;
