let a = prompt("number a", 'a');
let b = prompt("number b", 'b');
function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  };
  console.log(pow(a,b))
  

  function createUser (firstName = null, lastName = null, age = null) {
          let obj = {
            firstName,
            lastName,
            age,
        }
        return obj;
  }
  console.log(createUser());

  function compare(number, yes, no) {
    if (number < 100) yes()
    else no();
  }
  function yes() {
    console.log( "меньше 100" );
  }
  function no() {
    console.log( "больше 100" );
  }
  compare(22, yes, no);
