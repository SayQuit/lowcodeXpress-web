import '../../../style/right.css'
import React, { useContext } from 'react';
import { Flex, Button } from 'antd';
import VariableSelector from './component/variableSelector';
import EventSelector from './component/eventSelector';
import { ElementContext } from '../../../provider/elementProvider';
import PropsSelector from './component/propsSelector';
function ConfigSelector() {
    const {
        setProjectDetail,
    } = useContext(ElementContext)
    return (
        <Flex gap="small" vertical className='right-tab'>
            <Button onClick={setProjectDetail}>保存</Button>
            <PropsSelector></PropsSelector>
            <VariableSelector></VariableSelector>
            <EventSelector></EventSelector>
        </Flex>
    );
}

export default ConfigSelector;
