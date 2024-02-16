import '../style/header.css'
import { Button } from 'antd';
import TypeTag from '../../../component/typeTag';
import { ElementContext } from '../provider/elementProvider';
import { useContext, useMemo } from 'react';
import { getTags } from '../../../utils/optionsTags';
import { confirmMessage, successMessage, warningMessage } from '../../../utils/message';

function ProjectHeader() {

    const {
        detail,
        activeElement,
        isElementActive,
        elementDispatch,
        setProjectDetail,
        setCopyElement,
        copyElement,
        setActiveElementID,
        activeElementID,
        createElementByElement,
        activeElementParent
    } = useContext(ElementContext)

    const tagList = useMemo(() => {
        return getTags(detail.tags)
    }, [detail])

    const handleDeleteElement = async () => {
        confirmMessage('确认删除吗')
            .then(() => {
                setActiveElementID('')
                elementDispatch({ type: 'delete', id: activeElementID })
            })
            .catch(() => { })
    }

    const handlePasteElement = () => {
        setActiveElementID('')
        elementDispatch({ type: 'replace', element: copyElement, id: activeElementID })
        setCopyElement(createElementByElement(copyElement))
        successMessage('粘贴成功')
    }

    const handleCopyElement = () => {
        setCopyElement(createElementByElement(activeElement))
        successMessage('复制成功')
    }

    const handleBubble = () => {
        if(!activeElementParent){
            warningMessage('已到顶部元素')
            return
        }
        setActiveElementID(activeElementParent.id)
    }

    return (
        <div className="header">
            <div className='flex items-center'>
                {
                    tagList.map(item => {
                        return (
                            <div className='mr-2 inline-block' key={item.name}>
                                <TypeTag name={item.name} color={item.color} backgroundColor={item.backgroundColor}></TypeTag>
                            </div>
                        )
                    })
                }
            </div>
            <div className='h-full flex items-center'>
                <Button type="primary" className='mr-2' size='small' onClick={setProjectDetail}>保存</Button>
                <Button type="primary" className='mr-2' size='small'>预览</Button>
                <Button type="primary" className='mr-2' size='small'>上线</Button>
                <Button type="primary" className='mr-2' size='small'>导出文件</Button>
                {isElementActive && <Button className='mr-2' size='small' onClick={() => { handleBubble() }}>冒泡</Button>}
                {isElementActive && activeElement.type !== 'container' && <Button className='mr-2' size='small' onClick={() => { handleCopyElement(activeElement) }}>复制</Button>}
                {isElementActive && activeElement.type === 'container' && copyElement && <Button className='mr-2' size='small' onClick={handlePasteElement}>粘贴</Button>}
                {isElementActive && <Button className='mr-2' size='small' onClick={() => { elementDispatch({ type: 'insert', elementType: 'container', id: activeElementID, offset: 0 }) }}>上方放置</Button>}
                {isElementActive && <Button className='mr-2' size='small' onClick={() => { elementDispatch({ type: 'insert', elementType: 'container', id: activeElementID, offset: 1 }) }}>下方放置</Button>}
                {isElementActive && <Button type="primary" danger size='small' onClick={handleDeleteElement}>删除</Button>}
            </div>
        </div>
    );
}

export default ProjectHeader;
