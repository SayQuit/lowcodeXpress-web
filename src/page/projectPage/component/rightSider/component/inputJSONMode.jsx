import '../../../style/right.css'
import { Flex, Input } from 'antd';

function InputJSONMode({ onChange, value, name, type, tab }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value: JSON.parse(value.target.value)
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{tab === 'attr' ? name + ' ' + type : name}</div>
            <Input size='small' className='flex-1' onChange={handleOnChange} value={JSON.stringify(value)}></Input>
        </Flex>
    );
}

export default InputJSONMode;
