    function keyBy(arr, key) {
    const newObj = arr.reduce((newObj, arrElement) => {
        if (!(newObj[arrElement[key]])){
            newObj[arrElement[key]] = [];
        } 
        newObj[arrElement[key]].push(arrElement);
        return newObj;
    }, {})
    console.log(newObj);
}
keyBy();