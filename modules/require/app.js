const { add, subtract } = require('./actions.js');
const number = require('./number.js');

console.log('number', number);

console.log('add(number, number) =', add(number, number));
console.log('subtract(number, number) =', subtract(number, number));
