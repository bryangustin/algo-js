const readlineSync = require("readline-sync");
let number1 = readlineSync.question('Can you give me a number please?');
let number2 = number1+1;
while(number2>=number1){
	if (number2>=number1){
		number2 = readlineSync.question('Plus petit que le premier nombre svp!');
	}
	else {
		console.log('thank you ');
	}
}
console.log(number1%number2);
