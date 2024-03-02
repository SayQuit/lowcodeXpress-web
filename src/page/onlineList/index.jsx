import './index.css'
import { useEffect, useState } from 'react';
import { getOnlineListRequest } from '../../request';
import NavCard from '../../component/navCard';
import { Empty } from 'antd';

function OnlineList() {
    const [list, setList] = useState([])
    useEffect(() => {
        getProjectList()
    }, [])
    const getProjectList = async () => {
        const res = await getOnlineListRequest()
        if (!res) return
        const { list } = res.data
        setList(list)
    }

    return (
        <div className='mt-2 mb-2'>
            {
                list.map((item) =>
                    (<NavCard pathname={'/onlineProject'} projectID={item.id} title={item.name} description={item.description} tags={item.tags} key={item.id}></NavCard>))
            }
            {list.length === 0 && <Empty></Empty>}
        </div>
    );
}

export default OnlineList;
