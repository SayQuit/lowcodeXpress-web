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
                <Button type='primary'>按钮</Button>
            </div>
        </div>
    );
}

export default ProjectHeader;
