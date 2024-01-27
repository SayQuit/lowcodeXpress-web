import { useState } from 'react';
import '../../index.css'
import { VerticalLeftOutlined, VerticalRightOutlined } from '@ant-design/icons';
import ElementSelect from './component/elementSelect';


function LeftSider() {
    const [elementSelectVisible, setElementSelectVisible] = useState(false)
    const onElementSelectVisibleChange = () => {
        setElementSelectVisible(!elementSelectVisible)
    }
    return (
        <div className="project-left">
            {!elementSelectVisible && <VerticalLeftOutlined onClick={onElementSelectVisibleChange} />}
            {elementSelectVisible && <VerticalRightOutlined onClick={onElementSelectVisibleChange} />}
            {elementSelectVisible && <ElementSelect onClose={onElementSelectVisibleChange}></ElementSelect>}
        </div>
    );
}

export default LeftSider;
