import '../../../../style/right.css'
import React, { useMemo, useState, useContext } from 'react';
import { Button, Modal } from 'antd';
import PropsItem from './propsItem';
import { confirmMessage, successMessage, warningMessage } from '../../../../../../utils/message';
import { ElementContext } from '../../../../provider/elementProvider';
function PropsSelector() {
    const { props, propsDispatch, activeElementID, activeElement } = useContext(ElementContext)

    const handlePropsChange = (e, item) => {
        const newItem = { ...item }
        if (e.ty === 'type' && item.type !== e.val) { newItem.value = '' }
        propsDispatch({ type: 'change', props: { ...newItem, [e.ty]: e.val } })
    }




    const [modalVisible, setModalVisible] = useState(false)
    const [newProps, setNewProps] = useState({
        name: '',
        value: '',
        type: 'string',
        bind: '',
        bindElement: ''
    })
    const newPropsValid = useMemo(() => {
        for (const key in newProps) {
            if (!newProps[key] && key !== 'bindElement') return false
        }
        return true
    }, [newProps])
    const onNewPropsChange = (e) => {
        const NewVar = { ...newProps }
        if (e.ty === 'type' && NewVar.type !== e.val) { NewVar.value = '' }
        setNewProps({
            ...NewVar,
            [e.ty]: e.val
        })
    }
    const handleCreateNewProps = () => {
        if (!newPropsValid) {
            warningMessage('信息未填写完整')
            return
        }
        propsDispatch({ type: 'push', props: newProps })
        setModalVisible(false)
        setNewProps({
            name: '',
            value: '',
            type: 'string',
            bind: '',
            bindElement: ''
        })
        successMessage("成功添加变量")
    }

    const handleBingElement = (item) => {
        if (!activeElementID) {
            warningMessage('未选择元素')
            return
        }
        if (activeElement.childrenElement) {
            warningMessage('不可绑定在该元素上')
            return
        }
        propsDispatch({ type: 'change', props: { ...item, bindElement: activeElementID } });
        successMessage('成功绑定')
    }

    const handleDeleteProps = (id) => {
        confirmMessage('确认删除吗')
            .then(() => {
                propsDispatch({ type: 'delete', id })
            })
            .catch(() => { })
    }

    return (
        <>
            <Button type='primary' onClick={() => setModalVisible(!modalVisible)}>添加props</Button>
            {
                props.length ? props.map(item => {
                    return (
                        <div className='right-table' key={item.id}>
                            <PropsItem onChange={(e) => handlePropsChange(e, item)} props={item}></PropsItem>
                            <Button size='small' className='w-full mt-2' onClick={() => { handleBingElement(item) }}>绑定选中元素</Button>
                            <Button size='small' danger type='primary' className='w-full mt-2' onClick={() => { handleDeleteProps(item.id) }}>删除</Button>
                        </div>
                    )
                })
                    : ''}
            {modalVisible && <Modal width={700} open={modalVisible} centered onCancel={() => { setModalVisible(false) }} okText={'确认'} cancelText={'取消'} onOk={handleCreateNewProps}>
                <PropsItem onChange={onNewPropsChange} props={newProps}></PropsItem>
            </Modal>}
        </>
    );
}

export default PropsSelector;
