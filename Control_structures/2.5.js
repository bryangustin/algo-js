const readlineSync = require("readline-sync");

let number = readlineSync.question('Enter a number please!');

while (number!=42){
	number = readlineSync.question('Enter a number please!');
}