(async () => {
    const requireCommonJS = require('./common');
    // const requireEsModule = require('./es.mjs'); // NOTE: reuire of ES modules not supported

    const importCommonJS = await import('./common.js');
    const importEsModule = await import('./es.mjs');

    console.log('requireCommonJS', requireCommonJS);
    console.log('importCommonJS', importCommonJS);
    console.log('importEsModule', importEsModule);
})();
