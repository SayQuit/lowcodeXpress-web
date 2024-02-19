import '../../../style/right.css'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import EventItem from './eventItem';
function EventSelector() {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <Button type='primary' onClick={() => setModalVisible(!modalVisible)}>添加函数</Button>
            <div className='right-table'>
                <EventItem></EventItem>
                <Button size='small' className='w-full mt-2'>绑定选中元素</Button>
            </div>
            <Modal open={modalVisible} centered>
                <EventItem></EventItem>
            </Modal>
        </>
    );
}

export default EventSelector;
