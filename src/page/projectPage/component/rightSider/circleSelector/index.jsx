import '../../../style/right.css'
import React, { useContext, useMemo, useState } from 'react';
import { Button, Flex } from 'antd';
import { ElementContext } from '../../../provider/elementProvider';
import { Input, Select } from 'antd';
import CircleSelectorItem from './circleSelectorItem';
import { successMessage } from '../../../../../utils/message';
function CircleSelector() {
    const { pasteCircleElement, activeElement, variable, elementDispatch } = useContext(ElementContext)


    const [circleArrayKey, setCircleArrayKey] = useState('')
    const [circleArrayVariableName, setCircleArrayVariableName] = useState('')
    const [circleArrayVariable, setCircleArrayVariable] = useState(null)
    const circleArray = useMemo(() => {
        if (!circleArrayVariable) return []
        else return circleArrayVariable[circleArrayKey] || []
    }, [circleArrayVariable, circleArrayKey])

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
                circleArrayKey,
                circleArrayVariableName
            }
        }
        )
        successMessage('确认成功')

    }

    return (
        <Flex vertical gap='small' className='ml-2 mr-2'>
            <Button className='flex-1 ' onClick={pasteCircleElement}>粘贴</Button>
            <Button type='primary' className='flex-1' onClick={handleConfirm}>确认</Button>
            <Select className='flex-1'
                placeholder='添加数组'
                options={variable.map((item, index) => {
                    return {
                        label: item.name,
                        value: index
                    }
                })}
                onChange={(index) => { setCircleArrayVariableName(variable[index].name);setCircleArrayVariable(variable[index].value) }}
            >
            </Select>
            <Input className='flex-1' onChange={(e) => { setCircleArrayKey(e.target.value) }}></Input>
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
