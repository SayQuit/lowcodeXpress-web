import '../style/header.css'
import { Button, Checkbox } from 'antd';
import TypeTag from '../../../component/typeTag';
import { ElementContext } from '../provider/elementProvider';
import { useContext, useMemo } from 'react';
import { getTags } from '../../../utils/optionsTags';
import { confirmMessage, errorMessage, successMessage, warningMessage } from '../../../utils/message';
import { createOnlineRequest, exportDistRequest, exportFileRequest,exportProjectRequest } from '../../../request';
import { useNavigate } from 'react-router-dom';

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
        createElementByNestElement,
        activeElementParent,
        unnestWhenDelete,
        setUnnestWhenDelete,
        setElementFloat,
        elementFloat,
        openPreviewPage
    } = useContext(ElementContext)

    const navigate = useNavigate();

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
        setCopyElement(copyElement.type === 'nest' ? createElementByNestElement(copyElement) : createElementByElement(copyElement))
        successMessage('粘贴成功')
    }

    const handleCopyElement = () => {
        setCopyElement(activeElement.type === 'nest' ? createElementByNestElement(activeElement) : createElementByElement(activeElement))
        successMessage('复制成功')
    }

    const handleBubble = () => {
        if (!activeElementParent) {
            warningMessage('已到顶部元素')
            return
        }
        setActiveElementID(activeElementParent.id)
    }

    const handleUnnest = () => {
        if (!activeElementParent) {
            warningMessage('已是顶部元素')
            return
        }
        const len = activeElementParent.childrenElement.length
        if (len > 1) {
            confirmMessage('元素同级还有其他元素，确认同级元素都解除吗')
                .then(() => {
                    elementDispatch({ type: 'unnest', id: activeElementParent.id })
                    successMessage('解除成功')
                })
                .catch(() => { })
        }
        else if (len === 1) {
            elementDispatch({ type: 'unnest', id: activeElementParent.id })
            successMessage('解除成功')
        }
    }

    const handleNest = () => {
        elementDispatch({ type: 'nest', id: activeElementID })
        successMessage('嵌套成功')

    }

    const createOnline = () => {
        confirmMessage('项目是否上线？')
            .then(async () => {
                const res = await createOnlineRequest(detail.id)
                if (res) {
                    successMessage('上线成功')
                    confirmMessage('上线成功，是否前往上线页面？')
                        .then(() => {
                            navigate(`/onlineProject?id=${res.data.id}`)
                        })
                }
                else errorMessage('上线失败')
            })
            .catch(() => { })
    }

    return (
        <div className="header">
            <div className='flex items-center mb-2 mt-2'>
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
            <div className='flex items-center flex-wrap'>
                <Button type="primary" className='mr-2 mb-2 mt-2' size='small' onClick={setProjectDetail}>保存</Button>
                <Button type="primary" className='mr-2 mb-2 mt-2' size='small' onClick={openPreviewPage}>预览</Button>
                <Button type="primary" className='mr-2 mb-2 mt-2' size='small' onClick={createOnline}>上线</Button>
                <Button type="primary" className='mr-2 mb-2 mt-2' size='small' onClick={()=>{exportFileRequest(detail.id)}}>导出文件</Button>
                <Button type="primary" className='mr-2 mb-2 mt-2' size='small' onClick={()=>{exportProjectRequest(detail.id)}}>导出项目</Button>
                <Button type="primary" className='mr-2 mb-2 mt-2' size='small' onClick={()=>{exportDistRequest(detail.id)}}>导出打包</Button>
                {(!elementFloat) && <Button type="primary" className='mr-2 mb-2 mt-2' size='small' onClick={() => { setElementFloat(true) }}>隐藏容器</Button>}
                {elementFloat && <Button type="primary" className='mr-2 mb-2 mt-2' size='small' onClick={() => { setElementFloat(false) }}>显示容器</Button>}
                <Checkbox onChange={(e) => { setUnnestWhenDelete(e.target.checked) }} className='mt-2 mb-2' checked={unnestWhenDelete}>删除时解除嵌套</Checkbox>
                {isElementActive && <Button className='mr-2 mb-2 mt-2' size='small' onClick={() => { handleBubble() }}>冒泡</Button>}
                {isElementActive && <Button className='mr-2 mb-2 mt-2' size='small' onClick={() => { handleNest() }}>嵌套</Button>}
                {isElementActive && <Button className='mr-2 mb-2 mt-2' size='small' onClick={() => { handleUnnest() }}>解除父级嵌套</Button>}
                {isElementActive && activeElement.type !== 'container' && <Button className='mr-2 mb-2 mt-2' size='small' onClick={() => { handleCopyElement(activeElement) }}>复制</Button>}
                {isElementActive && copyElement && <Button className='mr-2 mb-2 mt-2' size='small' onClick={handlePasteElement}>粘贴</Button>}
                {isElementActive && <Button className='mr-2 mb-2 mt-2' size='small' onClick={() => { elementDispatch({ type: 'insert', elementType: 'container', id: activeElementID, offset: 0 }) }}>上方放置</Button>}
                {isElementActive && <Button className='mr-2 mb-2 mt-2' size='small' onClick={() => { elementDispatch({ type: 'insert', elementType: 'container', id: activeElementID, offset: 1 }) }}>下方放置</Button>}
                {isElementActive && <Button className='mb-2 mt-2' type="primary" danger size='small' onClick={handleDeleteElement}>删除</Button>}
            </div>
        </div>
    );
}

export default ProjectHeader;
