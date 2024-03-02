import '../../../style/right.css'
import React, { useContext } from 'react';
import { Flex, Button, Divider } from 'antd';
import VariableSelector from './component/variableSelector';
import EventSelector from './component/eventSelector';
import { ElementContext } from '../../../provider/elementProvider';
import PropsSelector from './component/propsSelector';
import OnloadSelector from './component/onloadSelector';
function ConfigSelector() {
    const {
        setProjectDetail,
    } = useContext(ElementContext)
    return (
        <Flex gap="small" vertical className='right-tab'>
            <Button onClick={setProjectDetail}>保存</Button>
            <OnloadSelector></OnloadSelector>
            <PropsSelector></PropsSelector>
            <Divider></Divider>
            <VariableSelector></VariableSelector>
            <Divider></Divider>
            <EventSelector></EventSelector>
        </Flex>
    );
}

export default ConfigSelector;
