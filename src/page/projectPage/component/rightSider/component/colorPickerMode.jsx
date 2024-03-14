import '../../../style/right.css'
import { Flex, ColorPicker } from 'antd';

function ColorPickerMode({ onChange, value, name, type, tab }) {
    const handleOnChange = (value) => {
        onChange({
            type,
            value: value.toHexString()
        })
    }
    return (
        <Flex>
            <div className='right-tab-font line-h-22'>{name}</div>
            {tab === 'attr' && <div className='right-tab-font line-h-22'>{type}</div>}
            <ColorPicker value={value} className='flex-1' onChange={handleOnChange} size="small" showText disabledAlpha allowClear></ColorPicker>
        </Flex>
    );
}

export default ColorPickerMode;
