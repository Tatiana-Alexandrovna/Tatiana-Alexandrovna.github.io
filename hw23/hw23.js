//1 setInterval
function printNumbers(arr) {
let index = 0; 
const timer = setInterval(function() {
    console.log(arr[index++]);
    if (index >= arr.length) clearInterval(timer);
}, 1000);
}
printNumbers([1,2,3,4,5])

//1.2 setTimeout
function printNumbers2(arr) {
    let index = 0;  
    setTimeout(function print() {
        console.log(arr[index]);
        index += 1;
        if (index === arr.length) return;
        setTimeout(print, 1000);
        
    }, 1000);
}
printNumbers2([1,2,3,4,5])

//2
function debounce(func, timeout) {
    let wasCalled = false;
    return function() {
        if (wasCalled) return;
        func.apply(this, arguments);
        wasCalled = true;
        setTimeout(() => wasCalled = false, timeout);
    };
}

//3
function throttle(func, timeout) {

    let isThrottled = false;
    let savedArgs;
    let savedThis;
    function wrapper() {
        if (isThrottled) {   
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply(this, arguments);
        isThrottled = true;
        setTimeout(() => {           
            isThrottled = false;           
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
            
        }, timeout);
    }  
    return wrapper;
}
