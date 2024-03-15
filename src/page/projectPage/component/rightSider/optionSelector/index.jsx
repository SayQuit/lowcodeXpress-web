import '../../../style/right.css'
import React from 'react';
import { Flex } from 'antd';
import { removePxFromString, removeUnitFromString } from '../../../../../utils/style';
import { ElementContext } from '../../../provider/elementProvider';
import { useContext } from 'react';
import { echartsOptionGroup } from '../utils/group/echartsOptionGroup';
import InputMode from '../component/inputMode'
import InputNumberMode from '../component/inputNumberMode';
import SelectMode from '../component/selectMode'
import ColorPickerMode from '../component/colorPickerMode';
function OptionSelector() {

    const { elementDispatch, activeElement, activeElementID, detail } = useContext(ElementContext);

    const onChange = (e) => {
        const { type, value } = e;
        console.log(activeElement);
        const newOption = {
            ...activeElement.attr.option,
        }
        console.log(newOption);
        console.log(type.split('.'));
        const prevKey = type.split('.')[0]
        const key = type.split('.')[1]
        if (typeof (value) !== 'boolean') {
            newOption[prevKey] = newOption[prevKey] || {}
            console.log(newOption);
            if (value) newOption[prevKey][key] = value
            else if (newOption[prevKey][key]) delete newOption[prevKey][key]
        }
        else newOption[prevKey][key] = value
        console.log(newOption);
        const newElement = {
            ...activeElement,
            attr: {
                ...activeElement.attr,
                option: newOption
            }

        }
        console.log(newElement);
        elementDispatch({ type: 'replace', element: newElement, id: activeElementID })
    }

    return (
        <Flex gap="small" vertical className='right-tab' key={activeElementID}>
            {echartsOptionGroup.map(item => {
                return <React.Fragment key={item.type}>
                    <h3>{item.name}</h3>
                    {item.option.map(o_item => {
                        return <React.Fragment key={item.type +'.'+ o_item.type}>
                            {o_item.componentType === 'input' && (
                                <InputMode
                                    onChange={onChange}
                                    value={activeElement.attr.option[item.type] ? activeElement.attr.option[item.type][o_item.type] || '' : ''}
                                    name={o_item.name}
                                    type={item.type +'.'+ o_item.type}
                                    tab={'option'}
                                />
                            )}
                            {o_item.componentType === 'inputNumber' && (
                                <InputNumberMode
                                    onChange={onChange}
                                    value={activeElement.attr.option[item.type] ? activeElement.attr.option[item.type][o_item.type] || '' : ''}
                                    name={o_item.name}
                                    type={item.type +'.'+ o_item.type}
                                    tab={'option'}
                                    initialAddonAfter={('')}
                                />
                            )}
                            {o_item.componentType === 'select' && (
                                <SelectMode
                                    onChange={onChange}
                                    value={activeElement.attr.option[item.type] ? activeElement.attr.option[item.type][o_item.type] || '' : ''}
                                    name={o_item.name}
                                    type={item.type +'.'+ o_item.type}
                                    options={o_item.options}
                                    tab={'option'}
                                />
                            )}
                            {o_item.componentType === 'colorPicker' && (
                                <ColorPickerMode
                                    onChange={onChange}
                                    value={activeElement.attr.option[item.type] ? activeElement.attr.option[item.type][o_item.type] || '' : ''}
                                    name={o_item.name}
                                    type={item.type +'.'+ o_item.type}
                                    tab={'option'}
                                />
                            )}
                        </React.Fragment>
                    })}
                </React.Fragment>

            })}
        </Flex>
    );
}

export default OptionSelector;
