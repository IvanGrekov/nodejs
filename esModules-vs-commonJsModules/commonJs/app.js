(async () => {
    const { add, subtract } = require('./actions');
    const { sayHello } = await import('abc'); // NOTE: we can't use require to connect esmodule

    console.log('sayHello', sayHello);
    console.log('add(5, 5) =', add(5, 5));
    console.log('subtract(5, 5) =', subtract(5, 5));
})();
