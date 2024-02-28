import { Select } from 'antd';
import { useEffect, useState } from 'react';
function DeepAttr({ object, onChange, deepIndex, attrArray }) {

    const [activeKey, setActiveKey] = useState(attrArray.length <= deepIndex ? attrArray[deepIndex] : '')

    const handleOnChange = (e) => {
        setActiveKey(e)
        onChange(deepIndex, e)
    }

    useEffect(()=>{
        setActiveKey('')
    },[object])

    return (
        <>
            <Select className='flex-1' value={activeKey} options={Object.keys(object).map((item) => { return { label: item, value: item } })} onChange={handleOnChange}></Select>
            {object[activeKey] && typeof (object[activeKey]) === 'object' &&
                <DeepAttr object={object[activeKey]} onChange={(index, value) => { onChange(index, value) }} deepIndex={deepIndex + 1} attrArray={attrArray}></DeepAttr>
            }
        </>
    );
}
// Object.keys(object).map((item) => { return { label: item, key: item } })
export default DeepAttr;
