import '../../../style/right.css'
import React, { useContext, useMemo, useState } from 'react';
import { Button, Flex, Input, Select } from 'antd';
import { ElementContext } from '../../../provider/elementProvider';
import CircleSelectorItem from './circleSelectorItem';
import { successMessage, warningMessage } from '../../../../../utils/message';
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

    const handleSetCircle = (item) => {
        let name = ''
        let value = []
        if (item) {
            name = JSON.parse(item).name
            value = JSON.parse(item).value
        }
        setCircleArray(value)
        setCircleVariableName(name)
    }

    return (
        <Flex vertical gap='small' className='ml-2 mr-2'>
            {activeElement.circleElement && <div>指向元素</div>}
            {activeElement.circleElement && <ReactJson src={activeElement.circleElement || []} style={{ fontSize: '16px' }} displayObjectSize={false} displayDataTypes={false} collapsed={true} />}
            {(circleArray || currentCircleArray) && <div>数据来源</div>}
            {(circleArray || currentCircleArray) && <ReactJson src={circleArray.length === 0 ? currentCircleArray : circleArray} style={{ fontSize: '16px' }} displayObjectSize={false} displayDataTypes={false} collapsed={true} />}
            <Button className='flex-1' onClick={pasteCircleElement}>粘贴</Button>
            <Button type='primary' className='flex-1' onClick={handleConfirm}>确认</Button>
            <Select
                className='flex-1'
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
                onChange={(item) => { handleSetCircle(item) }}
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
