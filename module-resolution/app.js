//#region conect modules with help of relative paths
// const a = require('./a');
// const b = require('./b');
// const c = require('./c');
// const d = require('./d');
// const e = require('./e');
// const f = require('./f');

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
//#endregion

//#region where node looks for a file
// console.log(require.resolve.paths('./a'));
// console.log(require.resolve.paths('a'));
// console.log(require.resolve.paths('package/k'));
// console.log(require.resolve.paths('os'));
//#endregion

//#region conect modules with help of just names
// const a = require('a');
// const b = require('b');
// const c = require('c');
// const d = require('d');
// const e = require('e');
// const f = require('f');
// const g = require('g');
// const j = require('j');
// const k = require('package/k');

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(j);
// console.log(k);

// console.log(require.resolve.paths('a'));
//#endregion

//#region conect modules with help of just names (require node_modules or with help of NODE_PATH=./module-resolution node app.js)
const a = require('myPackage/a');
// console.log(require.resolve.paths('myPackage/a'));

// console.log(a);
//#endregion

//#region paths for standard module (fs)
// console.log(require.resolve.paths('fs'));
//#endregion
