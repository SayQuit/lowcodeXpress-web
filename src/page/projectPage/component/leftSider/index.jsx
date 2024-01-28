import { useContext } from 'react';
import '../../index.css'
import { VerticalLeftOutlined, VerticalRightOutlined } from '@ant-design/icons';
import ElementSelect from './component/elementSelect';
import { LeftSiderContext } from '../../provider/leftSiderProvider';

function LeftSider() {
    const { elementSelectVisible, onElementSelectVisibleChange } = useContext(LeftSiderContext);
    return (
        <div className="project-left">
            <div className="project-left-tab">
                {
                    elementSelectVisible
                        ? <VerticalRightOutlined onClick={onElementSelectVisibleChange} />
                        : <VerticalLeftOutlined onClick={onElementSelectVisibleChange} />
                }
            </div>
            {elementSelectVisible && <ElementSelect onClose={onElementSelectVisibleChange}></ElementSelect>}
        </div>
    );
}

export default LeftSider;
