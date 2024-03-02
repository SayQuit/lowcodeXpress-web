import { NavLink } from 'react-router-dom';
import './index.css'
import { Card } from 'antd'
import TypeTag from '../typeTag'
import { getTags } from '../../utils/optionsTags';
import { useMemo } from 'react';

function NavCard({ pathname, projectID, title, description, tags }) {
    const tagList = useMemo(() => {
        return getTags(tags)
    }, [tags])
    return (
        <NavLink to={{ pathname, search: projectID ? `?id=${projectID}` : '' }}>
            <div className='nav'>
                <div className='nav-block'>
                    <Card bordered={true}>
                        <div className='nav-block-img'>
                            <img src="https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg" alt="" />
                        </div>
                        <div className='nav-block-title'>{title}</div>
                        <div className='nav-block-desc'>{description}</div>
                        {
                            tagList.map((item) => {
                                return (
                                    <div className='mr-2 mb-2 inline-block' key={item.name}>
                                        <TypeTag name={item.name} color={item.color} backgroundColor={item.backgroundColor}></TypeTag>
                                    </div>
                                )
                            })
                        }
                        {
                            !tagList.length && <div className='mr-2 mb-2 inline-block'>
                                <TypeTag name={' '} color={'#FFFFFF'} backgroundColor={'#FFFFFF'}></TypeTag>
                            </div>
                        }
                    </Card>
                </div>
            </div>
        </NavLink>
    );
}

export default NavCard;
