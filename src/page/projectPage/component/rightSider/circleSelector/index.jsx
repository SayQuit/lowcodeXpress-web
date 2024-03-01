import '../../../style/right.css'
import React, { useContext, useMemo, useState } from 'react';
import { Button, Flex, Input, Select } from 'antd';
import { ElementContext } from '../../../provider/elementProvider';
import CircleSelectorItem from './circleSelectorItem';
import { successMessage } from '../../../../../utils/message';
import ReactJson from 'react-json-view';
function CircleSelector() {
    const { pasteCircleElement, activeElement, variable, elementDispatch, variableMap, props, propsMap } = useContext(ElementContext)



    const [circleVariableName, setCircleVariableName] = useState('')
    const [circleArray, setCircleArray] = useState([])

    const currentCircleArray = useMemo(() => {
        if (!variableMap[activeElement.circleVariableName] && !propsMap[activeElement.circleVariableName]) return []
        if (variableMap[activeElement.circleVariableName]) return variableMap[activeElement.circleVariableName].value || []
        else if (propsMap[activeElement.circleVariableName]) return propsMap[activeElement.circleVariableName].value || []
        else return []
    }, [variableMap, activeElement, propsMap])

    const [target, setTarget] = useState([])

    const handleTargetOnChange = (index, item) => {
        const newTarget = [...target];
        newTarget[index] = item;
        setTarget(newTarget)
    }

    const handleConfirm = () => {
        elementDispatch({
            type: 'replace', id: activeElement.id,
            element: {
                ...activeElement,
                target,
                circleVariableName
            }
        }
        )
        successMessage('确认成功')

    }

    return (
        <Flex vertical gap='small' className='ml-2 mr-2'>
            {activeElement.circleElement && <div>指向元素</div>}
            {activeElement.circleElement && <ReactJson src={activeElement.circleElement} style={{ fontSize: '16px' }} displayObjectSize={false} displayDataTypes={false} collapsed={true} />}
            {(circleArray || currentCircleArray) && <div>数据来源</div>}
            {(circleArray || currentCircleArray) && <ReactJson src={circleArray.length === 0 ? currentCircleArray : circleArray} style={{ fontSize: '16px' }} displayObjectSize={false} displayDataTypes={false} collapsed={true} />}
            <Button className='flex-1' onClick={pasteCircleElement}>粘贴</Button>
            <Button type='primary' className='flex-1' onClick={handleConfirm}>确认</Button>
            <Select
                className='flex-1'
                allowClear
                placeholder='添加数组'
                options={variable.filter((item) => {
                    return item.value instanceof Array
                }).map((item, index) => {
                    return {
                        label: item.name,
                        value: index
                    }
                })}
                onChange={(index) => { if (!index) return; setCircleVariableName(variable[index].name); setCircleArray(variable[index].value) }}
            >
            </Select>
            <Select
                className='flex-1'
                allowClear
                placeholder='添加props数组'
                options={props.filter((item) => {
                    return item.value instanceof Array
                }).map((item, index) => {
                    return {
                        label: item.name,
                        value: index
                    }
                })}
                onChange={(index) => { if (!index) return; setCircleVariableName(props[index].name); setCircleArray(props[index].value) }}
            >
            </Select>
            {activeElement.circleElement && circleArray[0] && <Button type='primary' className='flex-1' onClick={() => { setTarget([...target, { from: [], to: [] }]) }}>增加映射关系</Button>}
            {
                target.map((_, index) => {
                    return <CircleSelectorItem
                        index={index}
                        key={index}
                        fromObject={circleArray[0]}
                        toObject={activeElement.circleElement}
                        onChange={handleTargetOnChange}>
                    </CircleSelectorItem>
                })
            }
        </Flex>
    );
}

export default CircleSelector;
