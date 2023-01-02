const commonJSapp = require('./commonJS-app');

//#region variables
// console.log('__filename', __filename);
// console.log('__dirname', __dirname);

// console.log('require', require);

// console.log('module', module);

// console.log('exports', exports);

// console.log('exports === module.exports', exports === module.exports);
// console.log('module === require.main', module === require.main);
// console.log('exports === require.main.exports', exports === require.main.exports);
//#endregion

//#region how node implements module variables
// (function (__filename, __dirname, require, module, exports) {
//     console.log('__filename', __filename);
//     console.log('__dirname', __dirname);
//     console.log('require', require);
//     console.log('module', module);
//     console.log('exports', exports);
// })('filename', 'dirname', 'requreObj', 'requreObj.main', 'requreObj.main.exports');
//#endregion

//#region what on the module if change exports var in that module
// console.log('commonJSapp', commonJSapp);
//#endregion

//#region changing exports variable
// module.exports = { x: 1 };
// exports = { y: 1 };

// console.log('module.exports', module.exports);
// console.log('exports', exports);

// exports.x = 5;
// console.log('module.exports', module.exports);
//#endregion

//#region changing module variable
// console.log('require.main', require.main);
// console.log('module', module);

// module = { foo: 'bar', exports: { x: 1 } };

// console.log('require.main', require.main);
// console.log('module', module);
//#endregion
