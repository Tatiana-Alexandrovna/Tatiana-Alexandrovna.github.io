function deepCopyFunction(inObject) {
    let outObject;
    let value;
    let key;
    if (typeof inObject !== "object" || inObject === null) {
    return inObject
    }
    outObject = Array.isArray(inObject) ? [] : {}
    for (key in inObject) {
    value = inObject[key]
    outObject[key] = deepCopyFunction(value)
    }
    return outObject
}
