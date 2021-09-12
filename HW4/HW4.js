const number1 = prompt("введите число 1", 1);
const number2 = prompt("введите число 2", 1);
const operator = prompt("введите +,-,*,/,**", "+");

if (isNaN(number1)===false && isNaN(number2)===false){
    if (operator === "+"){
        console.log((+number1) + (+number2));
    }
    else if (operator === "-"){
        console.log(number1 - number2);
    }
    else if (operator === "*"){
        console.log(number1 * number2);
    }
    else if (operator === "/"){
        console.log(number1 / number2);
    }
    else if (operator === "**"){
        console.log(number1 ** number2);
    }
    else{
        console.error("неподдерживаемый оператор");
    };
} else {
    console.error ("невалидное число");
}


