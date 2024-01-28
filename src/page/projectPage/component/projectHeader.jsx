import '../index.css'
import { VerticalLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function ProjectHeader() {
    return (
        <div className="project-main-header">
            <div className='flex items-center	'>
                <VerticalLeftOutlined />
            </div>
            <div className='h-full flex items-center'>
                <Button type="primary" className='mr-2'>保存</Button>
                <Button type="primary" className='mr-2'>预览</Button>
                <Button className='mr-2'>元素上方放置容器</Button>
                <Button className='mr-2'>元素下方插入容器</Button>
                <Button type="primary" danger>删除</Button>
            </div>
        </div>
    );
}

export default ProjectHeader;
