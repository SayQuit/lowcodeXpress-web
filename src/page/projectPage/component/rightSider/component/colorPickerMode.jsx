import '../../../style/right.css'
import { Flex, ColorPicker } from 'antd';

function ColorPickerMode({ onChange, defaultValue, name, type }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value: `#${value.toHex()}`
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            <ColorPicker defaultValue={defaultValue} onChange={handleOnChange} size="small" showText disabledAlpha></ColorPicker>
        </Flex>
    );
}

export default ColorPickerMode;
