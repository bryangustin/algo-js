const readlineSync = require("readline-sync");
const lib = require('./4.2.js');

let user = readlineSync.question('Enter a number!');

function multirand(n){
	let array=[];
	for(let i=0; i<n; i++){
		let random = lib.rand10();
		array[i]=random;
	}
	return array;
}

console.log(multirand(user));