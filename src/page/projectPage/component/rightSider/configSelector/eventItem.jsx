import '../../../style/right.css'
import { Flex, Select, Input, Checkbox } from 'antd';
const { TextArea } = Input;

function EventItem() {


    return (
        <Flex vertical gap="small">
            <Flex gap="small">
                <div className='right-table-title'>函数名称</div>
                <div className='right-table-title'>函数类型</div>
                <div className='right-table-title'>绑定事件</div>
            </Flex>
            <Flex gap="small">
                <Input className='right-table-value' size='small' defaultValue={''}></Input>
                <Select className='right-table-value' size='small'></Select>
                <Select className='right-table-value' size='small'></Select>
            </Flex>
            <TextArea></TextArea>
            <Checkbox>是否使用函数事件e的值</Checkbox>
            <Flex gap="small">
                <div className='right-table-title'>设置变量</div>
                <div className='right-table-title'>新值</div>
                <div className='right-table-title'>新值</div>
            </Flex>
            <Flex gap="small">
                <Input className='right-table-value' size='small' defaultValue={''}></Input>
                <Input className='right-table-value' size='small' defaultValue={''}></Input>
                <Select className='right-table-value' size='small'></Select>
            </Flex>
        </Flex>
    );
}

export default EventItem;
