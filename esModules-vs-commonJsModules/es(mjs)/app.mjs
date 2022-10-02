import { add, subtract } from './actions.mjs'; // NOTE: require an ext
import { someFunc } from './common.js';
import { sayHello } from 'a';

// NOTE: no .json
// NOTE: no NODE_PATH to import local modules like external
// NOTE: no require, module, exports, __filename, __dirname

console.log('add(5, 5) =', add(5, 5));
console.log('subtract(5, 5) =', subtract(5, 5));
console.log('someFunc() =', someFunc());
console.log('sayHello() =', sayHello());

// To show url of the module
console.log(import.meta.url);
console.log(new URL('./app.mjs', import.meta.url));
