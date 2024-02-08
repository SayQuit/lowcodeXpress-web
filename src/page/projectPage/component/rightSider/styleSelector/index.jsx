import '../../../style/right.css'
import { Flex } from 'antd';
import { convertToHyphenated, removePxFromString } from '../../../../../utils/style';
import { ElementContext } from '../../../provider/elementProvider';
import { useContext } from 'react';
import { styleGroup } from '../utils/styleGroup';
import InputNumberMode from '../component/inputNumberMode';
function StyleSelector() {

    const { elementDispatch, activeElement, activeIndex, isElementActive } = useContext(ElementContext);

    const onChange = (e) => {
        const { type, value, realVal } = e;
        const newStyleObject = {
            ...activeElement.styleObject,
        }
        if (realVal) newStyleObject[type] = value
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
            {styleGroup.map(item => {
                return (
                    (
                        item.componentType === 'inputNumber' &&
                        <InputNumberMode
                            onChange={onChange}
                            defaultValue={removePxFromString(activeElement.styleObject[item.type] || '')}
                            addonAfter={item.addonAfter}
                            name={item.name}
                            type={item.type}
                            key={item.type}
                        >
                        </InputNumberMode>
                    )
                    // (
                    //     item.componentType === 'inputNumber' &&
                    //     <StyleInputNumber
                    //         onChange={onChange}
                    //         value={removePxFromString(activeElement.styleObject[item.type] || '')}
                    //         addonAfter={item.addonAfter}
                    //         name={item.name}
                    //         type={item.type}
                    //     >
                    //     </StyleInputNumber>
                    // )
                )
            })}
        </Flex>
    );
}

export default StyleSelector;
