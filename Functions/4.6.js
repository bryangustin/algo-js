const readlineSync = require("readline-sync");

// function factorialize(num) {
//   if (num == 0 || num == 1)
//     return 1;
//   for (let i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// }

// let number = readlineSync.question('Enter a number to factorialize!');

// console.log(factorialize(number));

function factorialize(num) {
  if(num == 0 || num == 1){
    return 1;
	}
	else{
		return num*factorialize(num-1);
	}
}

let number = readlineSync.question('Enter a number to factorialize!');

console.log(factorialize(number));