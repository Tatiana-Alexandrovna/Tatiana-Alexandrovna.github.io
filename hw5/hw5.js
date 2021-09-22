//задание 1
let beersAsk;
let answer = prompt('Do you want a beer?', 'yes');
if (answer === "yes") {
  beersAsk = "beer";
} else {
  beersAsk = "juice";
}
console.log(beersAsk);


beersAsk = (answer === "yes") ? "beer" : "juice";
console.log(beersAsk);


//задание 2
let greeting;
let age = prompt('Сколько вам лет?', '');
if (age < 18) {
  greeting = "Доступ запрещен";
} else if (age <= 30) {
  greeting = "Привет"; 
}  else {
greeting = "Здравствуйте";
}
console.log(greeting);


greeting = (age > 30) ? "Здравствуйте": 
(age => 18 ) ? 'Привет':
"Доступ запрещен";
console.log(greeting);


//задание 3
let drinks;
let drinksAnswer = prompt('tea or coffee', "tea");
let sugar = prompt('with sugar', 'yes');
if (drinksAnswer === "tea" && sugar === "yes"){
  drinks = "tea with sugar";
} else if (drinksAnswer === "tea" && sugar !== "yes"){
  drinks = "tea without sugar";
} else if (drinksAnswer !== "tea" && sugar === "yes") {
  drinks = "coffee with sugar";
} else if (drinksAnswer !== "tea" && sugar !== "yes") {
  drinks = "coffee without sugar";
}
console.log(drinks);


drinks = (drinksAnswer ==='tea' && sugar === 'yes')? "tea with sugar":
(drinksAnswer ==='tea' && sugar !== 'yes')? "tea without sugar":
(drinksAnswer !=='tea' && sugar === 'yes')? "coffee with sugar":
(drinksAnswer !=='tea' && sugar !== 'yes')? "coffee without sugar":
"something else";
console.log(drinks);