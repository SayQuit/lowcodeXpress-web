import '../../../style/right.css'
import { Flex, ColorPicker } from 'antd';

function ColorPickerMode({ onChange, defaultValue, name, type }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value: value.toHexString()
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            <ColorPicker defaultValue={defaultValue} className='flex-1' onChange={handleOnChange} size="small" showText disabledAlpha></ColorPicker>
        </Flex>
    );
}

export default ColorPickerMode;
