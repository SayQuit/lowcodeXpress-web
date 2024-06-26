import '../../../../style/right.css'
import React, { useMemo, useState, useContext } from 'react';
import { Button, Modal } from 'antd';
import VariableItem from './variableItem';
import { confirmMessage, successMessage, warningMessage } from '../../../../../../utils/message';
import { ElementContext } from '../../../../provider/elementProvider';
function VariableSelector() {
    const { variable, variableDispatch, activeElementID, activeElement } = useContext(ElementContext)

    const handleVariableChange = (e, item) => {
        const newItem = { ...item }
        if (e.ty === 'type' && item.type !== e.val) { newItem.value = '' }
        variableDispatch({ type: 'change', variable: { ...newItem, [e.ty]: e.val } })
    }




    const [modalVisible, setModalVisible] = useState(false)
    const [newVariable, setNewVariable] = useState({
        name: '',
        value: '',
        type: 'string',
        bind: '',
        bindElement: ''
    })
    const newVariableValid = useMemo(() => {
        for (const key in newVariable) {
            if (!newVariable[key] && key !== 'bindElement' && key !== 'value') return false
        }
        return true
    }, [newVariable])
    const onNewVariableChange = (e) => {
        const NewVar = { ...newVariable }
        if (e.ty === 'type' && NewVar.type !== e.val) { NewVar.value = '' }
        setNewVariable({
            ...NewVar,
            [e.ty]: e.val
        })
    }
    const handleCreateNewVariable = () => {
        if (!newVariableValid) {
            warningMessage('信息未填写完整')
            return
        }
        variableDispatch({ type: 'push', variable: newVariable })
        setModalVisible(false)
        setNewVariable({
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
        variableDispatch({ type: 'change', variable: { ...item, bindElement: activeElementID } });
        successMessage('成功绑定')
    }

    const handleDeleteVariable = (id) => {
        confirmMessage('确认删除吗')
            .then(() => {
                variableDispatch({ type: 'delete', id })
            })
            .catch(() => { })
    }

    return (
        <>
            <Button type='primary' onClick={() => setModalVisible(!modalVisible)}>添加变量</Button>
            {
                variable.length ? variable.map(item => {
                    return (
                        <div className='right-table' key={item.id}>
                            <VariableItem onChange={(e) => handleVariableChange(e, item)} variable={item}></VariableItem>
                            <Button className='w-full mt-2' onClick={() => { handleBingElement(item) }}>绑定选中元素</Button>
                            <Button danger type='primary' className='w-full mt-2' onClick={() => { handleDeleteVariable(item.id) }} style={{ backgroundColor: '#0344CC' }}>删除</Button>
                        </div>
                    )
                })
                    : ''}
            {modalVisible && <Modal width={700} open={modalVisible} centered onCancel={() => { setModalVisible(false) }} okText={'确认'} cancelText={'取消'} onOk={handleCreateNewVariable}>
                <VariableItem onChange={onNewVariableChange} variable={newVariable}></VariableItem>
            </Modal>}
        </>
    );
}

export default VariableSelector;
