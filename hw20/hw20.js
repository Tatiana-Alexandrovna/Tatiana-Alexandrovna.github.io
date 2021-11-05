//1(цикл)
function fib1(n) {
    let previous = 1;
    let next = 1;
    for (let i = 3; i <= n; i++) {
      let sum = previous + next;
      previous = next;
      next = sum;
    }
    return next;
  };
 
  //1(рекурсия) 
function fib2(n){
    return n <= 2 ? 1 : fib1(n-2) + fib1(n-1);
}


//2(цикл)
function factorial1(n) {
    let result = 1;
    for (let i = n; i > 0; i--){
       result = result * i;
    }
    return result;
}

//2(рекурсия) )
function factorial2(n) {
    return n  > 1 ? n * factorial2(n - 1) : 1;
}
