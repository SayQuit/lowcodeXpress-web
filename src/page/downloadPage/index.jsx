import './index.css'
import { useEffect, useState } from 'react';
import { Empty } from 'antd';
import DownloadItem from './component/downloadItem';
import { exportProjectListRequest } from '../../request';

function DownloadProject() {
    const [list, setList] = useState([])
    useEffect(() => {
        getDownloadList()
    }, [])
    const getDownloadList = async () => {
        const res = await exportProjectListRequest()
        if (!res) return
        const { list } = res.data
        setList(list)
    }

    return (
        <div className='mt-2 mb-2'>
            {
                list.map((item) => {
                    return <DownloadItem createAt={item.createAt} name={item.name} isCreated={item.isCreated} id={item.id} key={item.id}></DownloadItem>
                })
            }
            {list.length === 0 && <Empty></Empty>}
        </div>
    );
}

export default DownloadProject;
