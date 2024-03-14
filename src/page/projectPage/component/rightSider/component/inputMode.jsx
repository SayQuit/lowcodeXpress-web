import '../../../style/right.css'
import { Flex, Input } from 'antd';

function InputMode({ onChange, value, name, type, tab }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value: value.target.value
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            {tab === 'attr' && <div className='right-tab-font line-h-22'>{type}</div>}
            <Input size='small' className='flex-1' onChange={handleOnChange} value={value}></Input>
        </Flex>
    );
}

export default InputMode;
