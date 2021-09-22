let previous = 1;
let next = 1;
function fibonacci(n) {
    for (let i = 3; i <= n; i++) {
      let sum = previous + next;
      previous = next;
      next = sum;
    }
    return next;
  };

  console.log(fibonacci(6));

const userNumber = prompt('Введите число', 17);
dividend: 
for ( i = 2; i <= userNumber; i++) {
  for (j = 2; j < i; j++){
  if (i % j === 0) continue dividend;
 }
 console.log(i);
}

