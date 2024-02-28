import '../../../style/right.css'
import { useState } from 'react';
import { Button, Flex } from 'antd';
import DeepAttr from '../../../../../component/deepAttr';
import { successMessage } from '../../../../../utils/message';
function CircleSelectorItem({ fromObject, toObject, index, onChange }) {

    const [toArray, setToArray] = useState([])
    const [fromArray, setFromArray] = useState([])

    const handleOnToArrayChange = (index, value) => {
        if (index >= toArray.length) setToArray([...toArray, value])
        else {
            const array = [...toArray]
            array.splice(index)
            array.push(value)
            setToArray(array)
        }
    }

    const handleOnFromArrayChange = (index, value) => {
        if (index >= toArray.length) setFromArray([...toArray, value])
        else {
            const array = [...toArray]
            array.splice(index)
            array.push(value)
            setFromArray(array)
        }
    }

    const handleConfirmChange = () => {
        onChange(index, { fromArray, toArray })
        successMessage('确认成功')
    }



    return (
        <>
            <Flex vertical gap='small' className='circle-selector'>
                <div>数组数据</div>
                {
                    fromObject && <DeepAttr object={fromObject} onChange={handleOnFromArrayChange} deepIndex={0} attrArray={fromArray}></DeepAttr>
                }
                <div>指向属性</div>
                {
                    toObject && <DeepAttr object={toObject} onChange={handleOnToArrayChange} deepIndex={0} attrArray={toArray}></DeepAttr>
                }
                <Button type='primary' onClick={handleConfirmChange}>确认</Button>
            </Flex>
        </>
    );
}

export default CircleSelectorItem;
