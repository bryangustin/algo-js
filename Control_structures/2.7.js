const readlineSync = require("readline-sync");
let i=0;
let n=null;
let numb=0;
let somme=0;
n=readlineSync.question('Enter a number!');
while(i<n){
	numb=readlineSync.question('Enter a number!');
	somme=somme+parseInt(numb);
	i++;
}
console.log('la somme est ' + somme);