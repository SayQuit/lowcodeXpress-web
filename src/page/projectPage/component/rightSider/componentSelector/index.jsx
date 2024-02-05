import '../../../style/right.css'
import { Flex } from 'antd';
import HeightInput from '../component/style/heightInput';
import WidthInput from '../component/style/widthInput';
import FontSize from '../component/style/fontSize';
import FontPosition from '../component/style/fontPosition'

function ComponentSelector() {
    const onChange=()=>{
        
    }
    return (
        <Flex gap="small" vertical className='right-tab'>
            <HeightInput></HeightInput>
            <WidthInput></WidthInput>
            <FontSize></FontSize>
            <FontPosition></FontPosition>
        </Flex>
    );
}

export default ComponentSelector;
