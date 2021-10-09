// 1
function arraySum(array) {
    const sum = array.reduce((result, element) => result + element , 0);
return sum;
};


function arraySum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
return sum;
};


//2
function mapToUpperCase(arr) {
    const arrUpperCase = arr.map(string => string.toUpperCase());
    return arrUpperCase;
};

function mapToUpperCase(arr) {
let arrUpperCase =[];
    for (let i = 0; i < arr.length; i++) {
        arrUpperCase[i] = arr[i].toUpperCase()
    };
    return arrUpperCase;
};

