import { add, subtract } from './actions.js';
import { number } from './number.js';
// const { number } = require('./number.js'); // NOTE: require is not defined in ES module scope

console.log('number', number);

console.log('add(number, number) =', add(number, number));
console.log('subtract(number, number) =', subtract(number, number));
