import '../../../style/right.css'
import { Flex, Input } from 'antd';

function InputJSONMode({ onChange, value, name, type, tab }) {
    const handleOnChange = (value) => {
        let val = value.target.value
        if (val === '') val = '""'
        onChange({
            type,
            value: JSON.parse(val)
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            {tab === 'attr' && <div className='right-tab-font line-h-22'>{type}</div>}
            <Input size='small' className='flex-1' onChange={handleOnChange} value={JSON.stringify(value)}></Input>
        </Flex>
    );
}

export default InputJSONMode;
