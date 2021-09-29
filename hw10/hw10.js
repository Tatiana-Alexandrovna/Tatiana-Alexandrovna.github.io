/*function emptyObject (obj) {
  for (let key in obj) {
    return false;
  }
  return true;
 };
console.log(emptyObject({}));



function numbersKey (object) {
  object = {
    '0': 'zero', 
    '42': 'answer', 
    'greeting': 'Hello',
    '3.14': 'PI', 
  } 
  for (let key in object) {
    if (isNaN(+key)) continue;
    console.log(object[key]);
}
}
console.log(numbersKey());*/


function doubleSalaries(salaries) {
  salaries = {
    HRs: { Alice: 500, Bob: 700 },
    Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
    QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
  };
  let newSalaries = Object.assign({}, salaries);
  for (let key in newSalaries) {
  const value = newSalaries[key];
    for (let i in value) {
      value[i] *= 2;
    }
  }    console.log(newSalaries)
}
console.log(doubleSalaries());
