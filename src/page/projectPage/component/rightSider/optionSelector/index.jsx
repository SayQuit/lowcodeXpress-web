import '../../../style/right.css'
import React from 'react';
import { Flex, Select } from 'antd';
import { ElementContext } from '../../../provider/elementProvider';
import { useContext } from 'react';
import { echartsOptionGroup } from '../utils/group/echartsOptionGroup';
import InputMode from '../component/inputMode'
import InputNumberMode from '../component/inputNumberMode';
import SelectMode from '../component/selectMode'
import ColorPickerMode from '../component/colorPickerMode';
import CheckoutMode from '../component/checkoutMode';
function OptionSelector() {

    const { elementDispatch, activeElement, activeElementID, variable, props } = useContext(ElementContext);

    const onChange = (e) => {
        const { type, value } = e;
        const newOption = {
            ...activeElement.attr.option,
        }
        const prevKey = type.split('.')[0]
        const key = type.split('.')[1]
        if (typeof (value) !== 'boolean') {
            newOption[prevKey] = newOption[prevKey] || {}
            if (value) newOption[prevKey][key] = value
            else if (newOption[prevKey][key]) delete newOption[prevKey][key]
        }
        else {
            if (!newOption[prevKey]) newOption[prevKey] = {}
            newOption[prevKey][key] = value
        }
        const newElement = {
            ...activeElement,
            attr: {
                ...activeElement.attr,
                option: newOption
            }

        }
        elementDispatch({ type: 'replace', element: newElement, id: activeElementID })
    }

    const handleXData = (item) => {
        let name
        if (!item) name = ''
        else name = JSON.parse(item).name
        const newElement = {
            ...activeElement,
            bindXElement: name || ''
        }
        elementDispatch({ type: 'replace', element: newElement, id: activeElementID })
    }

    const handleYData = (item) => {
        let name
        if (!item) name = ''
        else name = JSON.parse(item).name
        const newElement = {
            ...activeElement,
            bindYElement: name || ''
        }
        elementDispatch({ type: 'replace', element: newElement, id: activeElementID })
    }

    const handleSeriesData = (item) => {
        let name
        if (!item) name = ''
        else name = JSON.parse(item).name
        const newElement = {
            ...activeElement,
            bindSeriesElement: name || ''
        }
        elementDispatch({ type: 'replace', element: newElement, id: activeElementID })

    }

    return (
        activeElement && <Flex gap="small" vertical className='right-tab' key={activeElementID}>
            <h3>绑定X轴数据</h3>
            <Select
                allowClear
                placeholder='添加数组'
                options={[...variable, ...props].filter((item) => {
                    return item.value instanceof Array
                }).map((item) => {
                    return {
                        label: item.name,
                        value: JSON.stringify(item)
                    }
                })}
                onChange={(item) => { handleXData(item) }}
                defaultValue={activeElement.bindXElement || ''}
            ></Select>
            <h3>绑定Y轴数据</h3>
            <Select
                allowClear
                placeholder='添加数组'
                options={[...variable, ...props].filter((item) => {
                    return item.value instanceof Array
                }).map((item) => {
                    return {
                        label: item.name,
                        value: JSON.stringify(item)
                    }
                })}
                onChange={(item) => { handleYData(item) }}
                defaultValue={activeElement.bindSeriesElement || ''}
            ></Select>
            <h3>series数据</h3>
            <Select
                allowClear
                placeholder='添加数组'
                options={[...variable, ...props].filter((item) => {
                    return item.value instanceof Array
                }).map((item) => {
                    return {
                        label: item.name,
                        value: JSON.stringify(item)
                    }
                })}
                onChange={(item) => { handleSeriesData(item) }}
                defaultValue={activeElement.bindYElement || ''}
            ></Select>
            {echartsOptionGroup.map(item => {
                return <React.Fragment key={item.type}>
                    <h3>{item.name}</h3>
                    {item.option.map(o_item => {
                        return <React.Fragment key={item.type + '.' + o_item.type}>
                            {o_item.componentType === 'input' && (
                                <InputMode
                                    onChange={onChange}
                                    value={activeElement.attr.option[item.type] ? activeElement.attr.option[item.type][o_item.type] || '' : ''}
                                    name={o_item.name}
                                    type={item.type + '.' + o_item.type}
                                    tab={'option'}
                                />
                            )}
                            {o_item.componentType === 'inputNumber' && (
                                <InputNumberMode
                                    onChange={onChange}
                                    value={activeElement.attr.option[item.type] ? activeElement.attr.option[item.type][o_item.type] || '' : ''}
                                    name={o_item.name}
                                    type={item.type + '.' + o_item.type}
                                    tab={'option'}
                                    initialAddonAfter={('')}
                                />
                            )}
                            {o_item.componentType === 'select' && (
                                <SelectMode
                                    onChange={onChange}
                                    value={activeElement.attr.option[item.type] ? activeElement.attr.option[item.type][o_item.type] || '' : ''}
                                    name={o_item.name}
                                    type={item.type + '.' + o_item.type}
                                    options={o_item.options}
                                    tab={'option'}
                                />
                            )}
                            {o_item.componentType === 'colorPicker' && (
                                <ColorPickerMode
                                    onChange={onChange}
                                    value={activeElement.attr.option[item.type] ? activeElement.attr.option[item.type][o_item.type] || '' : ''}
                                    name={o_item.name}
                                    type={item.type + '.' + o_item.type}
                                    tab={'option'}
                                />
                            )}
                            {o_item.componentType === 'checkout' && (
                                <CheckoutMode
                                    onChange={onChange}
                                    value={activeElement.attr.option[item.type] ? activeElement.attr.option[item.type][o_item.type] || '' : ''}
                                    name={o_item.name}
                                    type={item.type + '.' + o_item.type}
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
