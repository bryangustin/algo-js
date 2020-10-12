const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question('whats your shoes size?');
let birthYear = readlineSync.question('wich year are you born?');

console.log(((((shoeSize*2)+5)*50)-birthYear)-1766);