const readlineSync = require("readline-sync");
const lib = require('./4.2.js');

function multirand(n){
	let array=[];
	for(let i=0; i<n; i++){
		let random = lib.rand10();
		array[i]=random;
	}
	return array;
}

function average(arr){
	let somme=0;
	for(let i=0; i<arr.length;i++){
		somme=somme+arr[i];
	}
	return somme/arr.length;
}

function min(arr){
	let min=arr[0];
	for (let i=1; i<arr.length; i++){
		if (arr[i]<min) {
			min=arr[i];
		}
	}
	return min;
}

function max(arr){
	let max=arr[0];
	for (let i=1; i<arr.length; i++){
		if (arr[i]>max) {
			max=arr[i];
		}
	}
	return max;
}
let user = readlineSync.question('Enter a number!');
let userArray=multirand(user);
console.log(userArray);
console.log(min(userArray));
console.log(max(userArray));
console.log(average(userArray));
