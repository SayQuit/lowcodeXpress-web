import '../../../style/right.css'
import { Flex } from 'antd';
import HeightInput from '../component/style/heightInput';
import WidthInput from '../component/style/widthInput';
import FontSize from '../component/style/fontSize';
import FontPosition from '../component/style/fontPosition'
import DisplayWay from '../component/style/displayWay';
import { convertToHyphenated } from '../../../../../utils/style';
import { ElementContext } from '../../../provider/elementProvider';
import { useContext, useEffect } from 'react';
function StyleSelector() {

    const { elementDispatch, activeElement, activeIndex } = useContext(ElementContext);

    const onChange = (e) => {
        const { type, value } = e;
        const newStyleObject = {
            ...activeElement.styleObject,
            [type]: value
        }
        let style = ''
        for (const key in newStyleObject) {
            const value = newStyleObject[key]
            style += `${convertToHyphenated(key)}:${value};`
        }
        const newElement = {
            ...activeElement,
            styleObject: newStyleObject,
            style

        }
        elementDispatch({ type: 'replace', element: newElement, index: activeIndex })
    }

    return (
        <Flex gap="small" vertical className='right-tab'>
            <DisplayWay></DisplayWay>
            <HeightInput onChange={onChange}></HeightInput>
            <WidthInput onChange={onChange}></WidthInput>
            <FontSize onChange={onChange}></FontSize>
            <FontPosition></FontPosition>
        </Flex>
    );
}

export default StyleSelector;
