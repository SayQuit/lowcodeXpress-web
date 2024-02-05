import '../index.css'
import { Button } from 'antd';
import TypeTag from '../../../component/typeTag';
import { ElementContext } from '../provider/elementProvider';
import { useContext, useMemo } from 'react';
import { getTags } from '../../../utils/optionsTags';
import { confirmMessage, successMessage } from '../../../utils/message';

function ProjectHeader() {

    const {
        detail,
        activeIndex,
        activeElement,
        isElementActive,
        elementDispatch,
        setProjectDetail,
        setCopyElement,
        copyElement
    } = useContext(ElementContext)

    const tagList = useMemo(() => {
        return getTags(detail.tags)
    }, [detail])

    const handleDeleteElement = async () => {
        confirmMessage('确认删除吗')
            .then(() => {
                elementDispatch({ type: 'delete', index: activeIndex })
            })
            .catch(() => { })
    }

    const handlePasteElement = () => {
        elementDispatch({ type: 'replace', elementType: copyElement.type, index: activeIndex })
        successMessage('粘贴成功')
    }

    const handleCopyElement = () => {
        setCopyElement(activeElement)
        successMessage('复制成功')
    }

    return (
        <div className="project-main-header">
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
                {isElementActive && activeElement.type !== 'container' && <Button className='mr-2' size='small' onClick={() => { handleCopyElement(activeElement) }}>复制</Button>}
                {isElementActive && activeElement.type === 'container' && copyElement && <Button className='mr-2' size='small' onClick={handlePasteElement}>粘贴</Button>}
                {isElementActive && <Button className='mr-2' size='small'>左拆分</Button>}
                {isElementActive && <Button className='mr-2' size='small'>右拆分</Button>}
                {isElementActive && <Button className='mr-2' size='small' onClick={() => { elementDispatch({ type: 'insert', elementType: 'container', index: activeIndex }) }}>上方放置</Button>}
                {isElementActive && <Button className='mr-2' size='small' onClick={() => { elementDispatch({ type: 'insert', elementType: 'container', index: activeIndex + 1 }) }}>下方放置</Button>}
                {isElementActive && <Button type="primary" danger size='small' onClick={handleDeleteElement}>删除</Button>}
            </div>
        </div>
    );
}

export default ProjectHeader;
