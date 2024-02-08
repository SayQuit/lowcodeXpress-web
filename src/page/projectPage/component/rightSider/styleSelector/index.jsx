import '../../../style/right.css'
import { Flex } from 'antd';
import HeightInput from '../component/style/heightInput';
import WidthInput from '../component/style/widthInput';
import FontSize from '../component/style/fontSize';
import FontPosition from '../component/style/fontPosition'
import DisplayWay from '../component/style/displayWay';
import { convertToHyphenated, removePxFromString } from '../../../../../utils/style';
import { ElementContext } from '../../../provider/elementProvider';
import { useContext } from 'react';
function StyleSelector() {

    const { elementDispatch, activeElement, activeIndex, isElementActive } = useContext(ElementContext);

    const onChange = (e) => {
        const { type, value } = e;
        const newStyleObject = {
            ...activeElement.styleObject,
        }
        if (removePxFromString(value)) newStyleObject[type] = value
        else if (newStyleObject[type]) delete newStyleObject[type]

        let style = ''
        for (const key in newStyleObject) {
            const val = newStyleObject[key]
            style += `${convertToHyphenated(key)}:${val};`
        }
        const newElement = {
            ...activeElement,
            styleObject: newStyleObject,
            style

        }
        elementDispatch({ type: 'replace', element: newElement, index: activeIndex })
    }

    return (
        isElementActive && <Flex gap="small" vertical className='right-tab'>
            <DisplayWay></DisplayWay>
            <HeightInput onChange={onChange} value={removePxFromString(activeElement.styleObject.height || '')}></HeightInput>
            <WidthInput onChange={onChange} value={removePxFromString(activeElement.styleObject.width || '')}></WidthInput>
            <FontSize onChange={onChange} value={removePxFromString(activeElement.styleObject.fontSize || '')}></FontSize>
            <FontPosition></FontPosition>
        </Flex>
    );
}

export default StyleSelector;
