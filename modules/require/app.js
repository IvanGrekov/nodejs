const { add, subtract } = require('./actions');
const number = require('./number');

console.log('number', number);

console.log('add(number, number) =', add(number, number));
console.log('subtract(number, number) =', subtract(number, number));
