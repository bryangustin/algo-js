const readlineSync = require("readline-sync");

let length = readlineSync.question('Enter the length!');
let width = readlineSync.question('Enter the width!');

function calcSurface(longueur,largeur){
	return longueur*largeur;
}
console.log("La surface est de : " + calcSurface(length,width));