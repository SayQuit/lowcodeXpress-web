export const convertToHyphenated = (property) => {
    return property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
export const removePxFromString = (inputString) => {
    console.log(inputString);
    const result = inputString.replace(/px/g, '');
    const parsedValue = parseFloat(result);
    return isNaN(parsedValue) ? '' : parsedValue;
}