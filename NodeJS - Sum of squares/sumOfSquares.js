const { square } = require('./square');
const { sum } = require('./sum');

const sumOfSquares = (x, y) => {
    const squareOfX = square(x);
    const squareOfY = square(y);

    return sum(squareOfX, squareOfY);
};

module.exports = {
    sumOfSquares,
};
