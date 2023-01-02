// (async function () {
//     const cjs = require('./common');
//     const mjs = await import('./es.mjs');

//     console.log('cjs', cjs);
//     console.log('mjs', mjs);
// })();

(async function () {
    const cjs = await import('./common.js');
    const mjs = await import('./es.mjs');

    console.log('cjs', cjs);
    console.log('mjs', mjs);
})();
