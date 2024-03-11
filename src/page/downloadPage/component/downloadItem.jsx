import '../index.css'
import { Spin } from 'antd'
import {
    DownloadOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { exportDownloadRequest } from '../../../request/index'
function DownloadItem({ name, createAt, isCreated, id }) {
    return (
        <div className='download-block'>
            <div className='download-item'>
                <div className={isCreated ? 'download-item-top' : 'download-item-top download-item-cover'}>
                    <img src="https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg" alt="" />
                    {!isCreated && <Spin className='download-item-loading'></Spin>}
                </div>
                <div className='download-item-bottom'>
                    <div>{name}</div>
                    <div className='download-gery-font'>{createAt}</div>
                    {!!isCreated && <DownloadOutlined className='mr-2 mt-2 cursor-pointer'  onClick={() => { exportDownloadRequest(id) }}/>}
                    {!!isCreated && <DeleteOutlined className='mr-2 mt-2 cursor-pointer' />}
                </div>
            </div>
        </div>
    );
}

export default DownloadItem;
