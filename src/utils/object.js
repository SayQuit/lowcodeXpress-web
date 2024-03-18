export const filterProperties = (obj, allowedProperties) => {
    const filteredObj = {};

    for (const prop in obj) {
        if (allowedProperties.includes(prop)) {
            filteredObj[prop] = obj[prop];
        }
    }

    return filteredObj;
}