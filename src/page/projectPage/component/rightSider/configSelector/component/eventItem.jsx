import '../../../../style/right.css'
import { Flex, Select, Input, Checkbox, InputNumber } from 'antd';
import { useContext, useMemo } from 'react';
import { ElementContext } from '../../../../provider/elementProvider';
const { TextArea } = Input;
const varTypeOptions = [
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

const typeOptions = [
    {
        label: '设值',
        value: 'setValue'
    },
    {
        label: '请求',
        value: 'request'
    },
    {
        label: '自定义',
        value: 'custom'
    },
]
const bindEventOptions = [
    {
        label: '点击事件',
        value: 'onClick'
    },
    {
        label: '改变事件',
        value: 'onChange'
    },
]
const methodOptions = [
    {
        label: 'GET',
        value: 'GET'
    },
    {
        label: 'POST',
        value: 'POST'
    },
]


function EventItem({ onChange, event }) {
    const {
        variable,
    } = useContext(ElementContext)

    const variableOptions = useMemo(() => {
        return variable.map((item) => {
            return {
                label: item.name,
                value: item.name,
            }
        })
    }, [variable])

    return (
        <Flex vertical gap="small">
            <Flex gap="small">
                <div className='right-table-title'>函数名称</div>
                <div className='right-table-title'>函数类型</div>
                <div className='right-table-title'>绑定事件</div>
            </Flex>
            <Flex gap="small">
                <Input className='right-table-value' value={event.name} onChange={(e) => { onChange({ val: e.target.value, ty: 'name' }) }}></Input>
                <Select className='right-table-value' options={typeOptions} value={event.type} onChange={(e) => onChange({ val: e, ty: 'type' })}></Select>
                <Select className='right-table-value' options={bindEventOptions} value={event.bindEvent} onChange={(e) => onChange({ val: e, ty: 'bindEvent' })}></Select>
            </Flex>
            {event.type === 'custom' && <TextArea value={event.custom.code} onChange={(e) => { onChange({ val: { ...event.custom, code: e.target.value }, ty: 'custom' }) }} size='large' autoSize={{ minRows: 10 }}></TextArea>}
            {event.type === 'setValue' && <Checkbox checked={event.setValue.useE} onChange={(e) => { onChange({ val: { ...event.setValue, useE: e.target.checked }, ty: 'setValue' }) }}>是否使用函数事件e的值</Checkbox>}
            {event.type === 'setValue' && <Flex gap="small">
                <div className='right-table-title'>设置变量</div>
                {(!event.setValue.useE) && <div className='right-table-title'>新值类型</div>}
                {(!event.setValue.useE) && <div className='right-table-title'>新值</div>}
                {event.setValue.useE && <div className='right-table-title'>新值</div>}
            </Flex>}
            {event.type === 'setValue' && <Flex gap="small">
                <Select className='right-table-value' options={variableOptions} value={event.setValue.variable} onChange={(e) => { onChange({ val: { ...event.setValue, variable: e }, ty: 'setValue' }) }}></Select>
                {(!event.setValue.useE) && <Select className='right-table-value' value={event.setValue.variableType} onChange={(e) => { onChange({ val: { ...event.setValue, variableType: e, newValue: '' }, ty: 'setValue' }) }} options={varTypeOptions}></Select>}
                {(!event.setValue.useE) && event.setValue.variableType === 'string' && <Input className='right-table-value' value={event.setValue.newValue} onChange={(e) => { onChange({ val: { ...event.setValue, newValue: e.target.value }, ty: 'setValue' }) }}></Input>}
                {(!event.setValue.useE) && event.setValue.variableType === 'number' && <InputNumber className='right-table-value' value={event.setValue.newValue} onChange={(e) => { onChange({ val: { ...event.setValue, newValue: e }, ty: 'setValue' }) }}></InputNumber>}
                {(!event.setValue.useE) && event.setValue.variableType === 'boolean' && <Select className='right-table-value' options={[{ label: 'true', value: true }, { label: 'false', value: false }]} value={event.setValue.newValue} onChange={(e) => { onChange({ val: { ...event.setValue, newValue: e }, ty: 'setValue' }) }}></Select>}
                {(!event.setValue.useE) && event.setValue.variableType === 'object' && <Input className='right-table-value' value={JSON.stringify(event.setValue.newValue)} onChange={(e) => { onChange({ val: { ...event.setValue, newValue: JSON.parse(e.target.value) }, ty: 'setValue' }) }}></Input>}
                {event.setValue.useE && <Select className='right-table-value' options={[{ label: 'e.target.value', value: 'e.target.value' }, { label: 'e', value: 'e' }, { label: 'e.target.checked', value: 'e.target.checked' }]} value={event.setValue.newValue} onChange={(e) => { onChange({ val: { ...event.setValue, newValue: e }, ty: 'setValue' }) }}></Select>}
            </Flex>}
            {event.type === 'request' && <Flex gap="small">
                <div className='right-table-title'>地址</div>
                <div className='right-table-title'>参数</div>
                <div className='right-table-title'>方法</div>
                <div className='right-table-title'>回显</div>
            </Flex>}
            {event.type === 'request' && <Flex gap="small">
                <Input className='right-table-value' value={event.request.url} onChange={(e) => { onChange({ val: { ...event.request, url: e.target.value }, ty: 'request' }) }}></Input>
                <Select className='right-table-value' options={variableOptions} value={event.request.params} mode="multiple" onChange={(e) => { onChange({ val: { ...event.request, params: e }, ty: 'request' }) }}></Select>
                <Select className='right-table-value' options={methodOptions} value={event.request.method} onChange={(e) => { onChange({ val: { ...event.request, method: e }, ty: 'request' }) }}></Select>
                <div className='right-table-value'><Checkbox defaultChecked={event.request.set} onChange={(e) => { onChange({ val: { ...event.request, set: e.target.checked }, ty: 'request' }) }}></Checkbox></div>
            </Flex>}
        </Flex>
    );
}

export default EventItem;
