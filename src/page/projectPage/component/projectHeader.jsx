import '../index.css'
import { Button } from 'antd';
import TypeTag from '../../../component/typeTag';
import { ElementContext } from '../provider/elementProvider';
import { useContext, useMemo } from 'react';
import { getTags } from '../../../utils/optionsTags';

function ProjectHeader() {

    const { detail, activeIndex, elementDispatch } = useContext(ElementContext)

    const tagList = useMemo(() => {
        return getTags(detail.tags)
    }, [detail])

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
                {activeIndex !== -1 && <Button type="primary" className='mr-2' size='small'>保存</Button>}
                <Button type="primary" className='mr-2' size='small'>预览</Button>
                <Button type="primary" className='mr-2' size='small'>上线</Button>
                <Button type="primary" className='mr-2' size='small'>导出文件</Button>
                {activeIndex !== -1 && <Button className='mr-2' size='small'>左拆分</Button>}
                {activeIndex !== -1 && <Button className='mr-2' size='small'>右拆分</Button>}
                {activeIndex !== -1 && <Button className='mr-2' size='small'>元素上方放置容器</Button>}
                {activeIndex !== -1 && <Button className='mr-2' size='small'>元素下方插入容器</Button>}
                {activeIndex !== -1 && <Button type="primary" danger size='small' onClick={() => { elementDispatch({ type: 'delete', index: activeIndex }) }}>删除</Button>}
            </div>
        </div>
    );
}

export default ProjectHeader;
