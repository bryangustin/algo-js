const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Can you give me a decimal number please?');
let number2 = readlineSync.question('Can you give me an other one please?');

console.log( Math.trunc(number1) * number2);