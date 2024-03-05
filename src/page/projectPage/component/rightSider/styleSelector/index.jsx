import '../../../style/right.css'
import React from 'react';
import { Flex } from 'antd';
import { convertToHyphenated, removePxFromString } from '../../../../../utils/style';
import { ElementContext } from '../../../provider/elementProvider';
import { useContext } from 'react';
import { styleGroup } from '../utils/group/styleGroup';
import InputMode from '../component/inputMode'
import InputNumberMode from '../component/inputNumberMode';
import SelectMode from '../component/selectMode'
import ColorPickerMode from '../component/colorPickerMode';
// import { elementMap } from '../../../utils/elementGroup';
function StyleSelector() {

    const { elementDispatch, activeElement, activeElementID } = useContext(ElementContext);

    const onChange = (e) => {
        const { type, value } = e;
        const newStyleObject = {
            ...activeElement.styleObject,
        }
        if (value) newStyleObject[type] = value
        else if (newStyleObject[type]) delete newStyleObject[type]

        if (value) {
            styleGroup.forEach(item => {
                if (item.type === type && item.addonAfter) newStyleObject[type] += item.addonAfter
            })
        }

        let style = ''
        for (const key in newStyleObject) {
            const val = newStyleObject[key]
            if (!val) continue
            style += `${convertToHyphenated(key)}:${val};`
        }

        const newElement = {
            ...activeElement,
            styleObject: newStyleObject,
            style

        }
        elementDispatch({ type: 'replace', element: newElement, id: activeElementID })
    }

    return (
        <Flex gap="small" vertical className='right-tab' key={activeElementID}>
            {styleGroup.map(item => {
                // todo
                //  elementMap[activeElement.type].styleSelector.includes(item.type) &&
                return <React.Fragment key={item.type}>
                    {item.componentType === 'input' && (
                        <InputMode
                            onChange={onChange}
                            value={activeElement.styleObject[item.type] || ''}
                            name={item.name}
                            type={item.type}
                            tab={'style'}
                        />
                    )}
                    {item.componentType === 'inputNumber' && (
                        <InputNumberMode
                            onChange={onChange}
                            value={removePxFromString(activeElement.styleObject[item.type] || '')}
                            addonAfter={item.addonAfter}
                            name={item.name}
                            type={item.type}
                            tab={'style'}
                        />
                    )}
                    {item.componentType === 'select' && (
                        <SelectMode
                            onChange={onChange}
                            value={activeElement.styleObject[item.type] || ''}
                            name={item.name}
                            type={item.type}
                            options={item.options}
                            tab={'style'}
                        />
                    )}
                    {item.componentType === 'colorPicker' && (
                        <ColorPickerMode
                            onChange={onChange}
                            value={activeElement.styleObject[item.type] || item.defaultValue}
                            name={item.name}
                            type={item.type}
                            tab={'style'}
                        />
                    )}
                </React.Fragment>
            })}
        </Flex>
    );
}

export default StyleSelector;
