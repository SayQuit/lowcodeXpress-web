import '../../../../style/right.css'
import React, { useState, useMemo, useContext } from 'react';
import { Button, Modal } from 'antd';
import EventItem from './eventItem';
import { confirmMessage, successMessage, warningMessage } from '../../../../../../utils/message';
import { ElementContext } from '../../../../provider/elementProvider';
const initEvent = () => {
    return {
        type: '',
        bindEvent: '',
        name: '',
        bindElement: '',
        custom: {
            code: ''
        },
        setValue: {
            newValue: '',
            variable: '',
            variableType: 'string',
            useE: false,
        },
        request: {
            url: '',
            method: '',
            params: [],
            set: false
        }

    }
}
function EventSelector() {

    const { eventDispatch, event, activeElementID, activeElement } = useContext(ElementContext)


    const [newEvent, setNewEvent] = useState(initEvent())
    const newEventValid = useMemo(() => {
        for (const key in newEvent) {
            if (!newEvent[key] && key !== 'bindElement') return false
        }
        if (newEvent.type !== 'custom') {
            for (const key in newEvent[newEvent.type]) {
                if (!newEvent[newEvent.type][key] && key === 'variable') return false
            }
        }
        return true
    }, [newEvent])
    const [modalVisible, setModalVisible] = useState(false)
    const handleCreateNewEvent = () => {
        if (!newEventValid) {
            warningMessage('信息未填写完整')
            return
        }

        eventDispatch({ type: 'push', event: newEvent })

        setNewEvent(initEvent())
        setModalVisible(false)
        successMessage("成功添加函数")

    }

    const handleChangeEvent = (e, item) => {
        let event = item
        if (e.ty === 'type') event = initEvent()
        eventDispatch({
            type: 'change', event: {
                ...item,
                custom: event.custom,
                setValue: event.setValue,
                request: event.request,
                [e.ty]: e.val
            }
        })

    }

    const handleBindElement = (item) => {
        if (!activeElementID) {
            warningMessage('未选择元素')
            return
        }
        if (activeElement.childrenElement) {
            warningMessage('不可绑定在该元素上')
            return
        }
        eventDispatch({ type: 'change', event: { ...item, bindElement: activeElementID } })
        successMessage('成功绑定')
    }

    const handleChangeNewEvent = (e) => {
        const NewE = { ...newEvent }
        let event = newEvent
        if (e.ty === 'type') event = initEvent()
        setNewEvent({
            ...NewE,
            custom: event.custom,
            setValue: event.setValue,
            request: event.request,
            [e.ty]: e.val
        })

    }

    const handleDeleteEvent = (id) => {
        confirmMessage('确认删除吗')
            .then(() => {
                eventDispatch({ type: 'delete', id })
            })
            .catch(() => { })
    }

    return (
        <>
            <Button type='primary' onClick={() => setModalVisible(!modalVisible)}>添加函数</Button>
            {
                event.map(item => {
                    return <div className='right-table' key={item.id}>
                        <EventItem onChange={(e) => { handleChangeEvent(e, item) }} event={item}></EventItem>
                        <Button size='small' className='w-full mt-2' onClick={() => { handleBindElement(item) }}>绑定选中元素</Button>
                        <Button size='small' danger type='primary' className='w-full mt-2' onClick={() => { handleDeleteEvent(item.id) }}>删除</Button>
                    </div>
                })
            }
            {modalVisible && <Modal width={700} open={modalVisible} centered onCancel={() => { setModalVisible(false) }} okText={'确认'} cancelText={'取消'} onOk={handleCreateNewEvent}>
                <EventItem event={newEvent} onChange={handleChangeNewEvent}></EventItem>
            </Modal>}
        </>
    );
}

export default EventSelector;
