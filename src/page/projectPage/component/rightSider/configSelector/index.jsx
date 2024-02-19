import '../../../style/right.css'
import React, { useContext } from 'react';
import { Flex, Button } from 'antd';
import VariableSelector from './variableSelector';
import EventSelector from './eventSelector';
import { ElementContext } from '../../../provider/elementProvider';
function ConfigSelector() {
    const {
        setProjectDetail,
    } = useContext(ElementContext)
    return (
        <Flex gap="small" vertical className='right-tab'>
            <Button onClick={setProjectDetail}>保存</Button>
            <VariableSelector></VariableSelector>
            <EventSelector></EventSelector>
        </Flex>
    );
}

export default ConfigSelector;
