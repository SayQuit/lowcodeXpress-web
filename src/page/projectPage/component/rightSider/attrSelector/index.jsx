import '../../../style/right.css'
import React from 'react';
import { Flex } from 'antd';
import { ElementContext } from '../../../provider/elementProvider';
import { useContext } from 'react';
import { attrGroup } from '../utils/group/attrGroup';
import InputMode from '../component/inputMode'
import CheckoutMode from '../component/checkoutMode'
import { elementMap } from '../../../utils/elementGroup';
import SelectMode from '../component/selectMode';
import InputNumberMode from '../component/inputNumberMode';
import InputJSONMode from '../component/inputJSONMode';
import ColorPickerMode from '../component/colorPickerMode';
function AttrSelector() {

    const { elementDispatch, activeElement, activeElementID } = useContext(ElementContext);

    const onChange = (e) => {
        const { type, value } = e;
        const newAttr = {
            ...activeElement.attr,
        }
        if (typeof (value) !== 'boolean') {
            if (value) newAttr[type] = value
            else if (newAttr[type]) delete newAttr[type]
        }
        else newAttr[type] = value
        const newElement = {
            ...activeElement,
            attr: newAttr

        }
        elementDispatch({ type: 'replace', element: newElement, id: activeElementID })
    }

    return (
        <Flex gap="small" vertical className='right-tab'>
            {attrGroup.map(item => {
                return elementMap[activeElement.type].attrSelector.includes(item.type) &&
                    <React.Fragment key={item.type}>
                        {item.componentType === 'input' && (
                            <InputMode
                                onChange={onChange}
                                value={activeElement.attr[item.type] || ''}
                                name={item.name}
                                type={item.type}
                                tab={'attr'}
                            />
                        )}{item.componentType === 'inputNumber' && (
                            <InputNumberMode
                                onChange={onChange}
                                value={activeElement.attr[item.type] || ''}
                                name={item.name}
                                type={item.type}
                                tab={'attr'}
                            />
                        )}
                        {item.componentType === 'checkout' && (
                            <CheckoutMode
                                onChange={onChange}
                                value={activeElement.attr[item.type] || false}
                                name={item.name}
                                type={item.type}
                                tab={'attr'}
                            />
                        )}
                        {item.componentType === 'select' && (
                            <SelectMode
                                onChange={onChange}
                                value={activeElement.attr[item.type] || ''}
                                name={item.name}
                                type={item.type}
                                options={item.options}
                                tab={'attr'}
                            />
                        )}
                        {item.componentType === 'inputJSON' && (
                            <InputJSONMode
                                onChange={onChange}
                                value={activeElement.attr[item.type] || ''}
                                name={item.name}
                                type={item.type}
                                tab={'attr'}
                            />
                        )}
                        {item.componentType === 'colorPicker' && (
                            <ColorPickerMode
                                onChange={onChange}
                                value={activeElement.attr[item.type] || ''}
                                name={item.name}
                                type={item.type}
                                tab={'attr'}
                            />
                        )}
                    </React.Fragment>
            })}
        </Flex>
    );
}

export default AttrSelector;
