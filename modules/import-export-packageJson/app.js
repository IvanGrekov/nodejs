import { add, subtract } from './actions.js';
import { number } from './number.js';

console.log('number', number);

console.log('add(number, number) =', add(number, number));
console.log('subtract(number, number) =', subtract(number, number));
