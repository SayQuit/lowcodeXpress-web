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

function VariableItem({ onChange, variable }) {
    return (
        <>
            <Flex gap="small">
                <div className='right-table-title mb-2'>变量名称</div>
                <div className='right-table-title mb-2'>变量类型</div>
                <div className='right-table-title mb-2'>变量值</div>
                <div className='right-table-title mb-2'>绑定属性</div>
            </Flex>
            <Flex gap="small">
                <Input className='right-table-value' size='small' defaultValue={variable.name} onChange={(e) => { onChange({ val: e.target.value, ty: 'name' }) }}></Input>
                <Select className='right-table-value' size='small' defaultValue={variable.type} onChange={(e) => onChange({ val: e, ty: 'type' })} options={typeOptions}></Select>
                {variable.type === 'string' && <Input className='right-table-value' size='small' defaultValue={variable.value} onChange={(e) => { onChange({ val: e.target.value, ty: 'value' }) }}></Input>}
                {variable.type === 'number' && <InputNumber className='right-table-value' size='small' defaultValue={variable.value} onChange={(e) => { onChange({ val: e, ty: 'value' }) }}></InputNumber>}
                {variable.type === 'boolean' && <Select className='right-table-value' size='small' options={[{ label: 'true', value: true }, { label: 'false', value: false }]} defaultValue={variable.value} onChange={(e) => { onChange({ val: e, ty: 'value' }) }} allowClear></Select>}
                {variable.type === 'object' && <Input className='right-table-value' size='small' defaultValue={variable.value} onChange={(e) => { onChange({ val: JSON.parse(e.target.value), ty: 'value' }) }}></Input>}
                <Input className='right-table-value' size='small' defaultValue={variable.bind} onChange={(e) => { onChange({ val: e.target.value, ty: 'bind' }) }}></Input>
            </Flex>
        </>
    );
}

export default VariableItem;
