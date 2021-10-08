const fruitsArray = ['Apple', 'Banana', 'Pineapple'];

fruitsArray.push('Orange', 'Grapes');

fruitsArray.splice(1, 1, 'Peer');

const lestElement = fruitsArray.pop();
console.log(lestElement);

fruitsArray.unshift('Watermelon');
console.log(fruitsArray);
