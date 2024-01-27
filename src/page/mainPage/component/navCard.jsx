import { NavLink } from 'react-router-dom';
import '../index.css'
import { Card } from 'antd'

function NavCard({ pathname, projectID, title, desc }) {
    return (
        <NavLink to={{ pathname, search: `?id=${projectID}` }}>
            <div className='main-item'>
                <div className='main-item-block'>
                    <Card bordered={true}>
                        <div className='main-item-block-img'>
                            <img src="https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg" alt="" />
                        </div>
                        <div className='main-item-block-title'>{title}</div>
                        <div className='main-item-block-desc'>{desc}</div>
                    </Card>
                </div>
            </div>
        </NavLink>
    );
}

export default NavCard;
