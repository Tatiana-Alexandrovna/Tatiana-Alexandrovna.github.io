const number1 = +prompt("введите число 1", 1);
const number2 = +prompt("введите число 2", 1);
const OMG = Math.round(Math.floor(number1)/Math.floor(number2))*Math.floor(number2);

if (number1 > number2 && number2 >= 1){
    console.log(OMG);
} else if(number1 < number2 && number2 >= 1) {
    console.log(number2);
} else {
    console.error('error');
}