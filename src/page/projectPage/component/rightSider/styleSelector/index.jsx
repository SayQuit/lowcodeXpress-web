import '../../../style/right.css'
import React from 'react';
import { Flex } from 'antd';
import { convertToHyphenated, removePxFromString } from '../../../../../utils/style';
import { ElementContext } from '../../../provider/elementProvider';
import { useContext } from 'react';
import { styleGroup } from '../utils/styleGroup';
import InputNumberMode from '../component/inputNumberMode';
import SelectMode from '../component/selectMode'
import ColorPickerMode from '../component/colorPickerMode';
function StyleSelector() {

    const { elementDispatch, activeElement, activeIndex, isElementActive } = useContext(ElementContext);

    const onChange = (e) => {
        const { type, value } = e;
        const newStyleObject = {
            ...activeElement.styleObject,
        }
        if (value) newStyleObject[type] = value
        else if (newStyleObject[type]) delete newStyleObject[type]

        styleGroup.forEach(item => {
            if (item.type === type && item.addonAfter) newStyleObject[type] += item.addonAfter
        })

        let style = ''
        for (const key in newStyleObject) {
            const val = newStyleObject[key]
            style += `${convertToHyphenated(key)}:${val};`
        }
        const newElement = {
            ...activeElement,
            styleObject: newStyleObject,
            style

        }
        elementDispatch({ type: 'replace', element: newElement, index: activeIndex })
    }

    return (
        isElementActive && <Flex gap="small" vertical className='right-tab'>
            {styleGroup.map(item => {
                return <React.Fragment key={item.type}>
                    {item.componentType === 'inputNumber' && (
                        <InputNumberMode
                            onChange={onChange}
                            defaultValue={removePxFromString(activeElement.styleObject[item.type] || '')}
                            addonAfter={item.addonAfter}
                            name={item.name}
                            type={item.type}
                        />
                    )}
                    {item.componentType === 'select' && (
                        <SelectMode
                            onChange={onChange}
                            defaultValue={activeElement.styleObject[item.type] || ''}
                            name={item.name}
                            type={item.type}
                            options={item.options}
                        />
                    )}
                    {item.componentType === 'colorPicker' && (
                        <ColorPickerMode
                            onChange={onChange}
                            defaultValue={activeElement.styleObject[item.type] || item.defaultValue}
                            name={item.name}
                            type={item.type}
                        />
                    )}
                </React.Fragment>
            })}
        </Flex>
    );
}

export default StyleSelector;
