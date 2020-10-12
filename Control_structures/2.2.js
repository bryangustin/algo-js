const readlineSync = require("readline-sync");

let current = readlineSync.question('Enter a number bigger than 1 please!');
let min = readlineSync.question('Enter a number smaller than the first one please!');
let max = readlineSync.question('Enter a number bigger than the first one please!?');

if (current<max && current>min){
	console.log(min + ' ' + current + ' ' + max);
}
else if (min>=max){
	console.log('You should read');
}
