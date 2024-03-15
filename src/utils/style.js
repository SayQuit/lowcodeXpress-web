export const convertToHyphenated = (property) => {
    return property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
export const removePxFromString = (inputString) => {
    let result = inputString.replace(/px/g, '');
    result = inputString.replace(/%/g, '');
    result = inputString.replace(/rpx/g, '');
    const parsedValue = parseFloat(result);
    return isNaN(parsedValue) ? '' : parsedValue;
}
export const removeUnitFromString = (inputString) => {
    const unitRegex = /(px|%|rpx)/g;
    const match = inputString.match(unitRegex);
    let unit = '';
    if (match) {
        unit = match[0];
    }
    return unit;
}

export const replaceRpxWithPx = (containerStyle) => {
    let { styleObject, style } = containerStyle;
    style = style || ''

    const updatedStyleObject = {};
    for (const key in styleObject) {
        if (styleObject.hasOwnProperty(key)) {
            let value = styleObject[key];
            if (typeof value === 'string') {
                value = value.replace(/rpx/g, 'px');
            }
            updatedStyleObject[key] = value;
        }
    }
    const updatedStyle = style.replace(/rpx/g, 'px');

    return { styleObject: updatedStyleObject, style: updatedStyle };
}
