import '../../../style/right.css'
import { Flex, Input } from 'antd';

function InputMode({ onChange, defaultValue, name, prev, next }) {
    const handleOnChange = (value) => {
        onChange(prev + value + next)
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            <Input size='small' className='flex-1' onChange={handleOnChange} defaultValue={defaultValue}></Input>
        </Flex>
    );
}

export default InputMode;
