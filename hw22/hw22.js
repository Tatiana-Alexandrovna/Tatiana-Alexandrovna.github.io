function createRangeFilter(min, max){
    return function filter(num){
        return num >= min && num <= max;
    }
}


function createKeyBy(propName){
    return function keyBy(arr) {
        return arr.reduce(function(prev, cur) {
            (prev[cur[propName]] = prev[cur[propName]] || []).push(cur);
            return prev;
          }, {});;
    }
}


function createCalcPercent(percent){
    return function calcPercent(value) {
        return (percent * value) / 100; 
    }
} 
