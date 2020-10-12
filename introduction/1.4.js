const readlineSync = require("readline-sync");

let name = readlineSync.question('Can you give me your name please?');
let firstname = readlineSync.question('Can you give me your firstname please?');
let city = readlineSync.question('In wich city are you living?');

console.log("Hello " + name + ' ' + firstname + ' welcome in ' + city + '!');