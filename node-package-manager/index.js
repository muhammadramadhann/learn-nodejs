const _ = require('lodash');

const myOddEvenArray = _.reduce([8, 9], (sum, num) => sum + num);
console.log(myOddEvenArray);