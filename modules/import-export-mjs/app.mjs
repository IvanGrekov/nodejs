import { add, subtract } from './actions.mjs';
import { number } from './number.mjs';

console.log('number', number);

console.log('add(number, number) =', add(number, number));
console.log('subtract(number, number) =', subtract(number, number));
