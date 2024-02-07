export const convertToHyphenated = (property) => {
    return property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}