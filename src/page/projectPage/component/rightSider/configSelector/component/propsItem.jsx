import '../../../../style/right.css'
import { Flex, Input, InputNumber, Select } from 'antd';

const typeOptions = [
    {
        label: '字符串',
        value: 'string'
    },
    {
        label: '数字',
        value: 'number'
    },
    {
        label: '布尔',
        value: 'boolean'
    },
    {
        label: '对象',
        value: 'object'
    }
]

function PropsItem({ onChange, props }) {
    return (
        <>
            <Flex gap="small">
                <div className='right-table-title mb-2'>props名称</div>
                <div className='right-table-title mb-2'>props类型</div>
                <div className='right-table-title mb-2'>props默认</div>
                <div className='right-table-title mb-2'>绑定属性</div>
            </Flex>
            <Flex gap="small">
                <Input className='right-table-value' value={props.name} onChange={(e) => { onChange({ val: e.target.value, ty: 'name' }) }}></Input>
                <Select className='right-table-value' value={props.type} onChange={(e) => onChange({ val: e, ty: 'type' })} options={typeOptions}></Select>
                {props.type === 'string' && <Input className='right-table-value' value={props.value} onChange={(e) => { onChange({ val: e.target.value, ty: 'value' }) }}></Input>}
                {props.type === 'number' && <InputNumber className='right-table-value' value={props.value} onChange={(e) => { onChange({ val: e, ty: 'value' }) }}></InputNumber>}
                {props.type === 'boolean' && <Select className='right-table-value' options={[{ label: 'true', value: true }, { label: 'false', value: false }]} value={props.value} onChange={(e) => { onChange({ val: e, ty: 'value' }) }} allowClear></Select>}
                {props.type === 'object' && <Input className='right-table-value' value={JSON.stringify(props.value)} onChange={(e) => { onChange({ val: JSON.parse(e.target.value), ty: 'value' }) }}></Input>}
                <Input className='right-table-value' value={props.bind} onChange={(e) => { onChange({ val: e.target.value, ty: 'bind' }) }}></Input>
            </Flex>
        </>
    );
}

export default PropsItem;
