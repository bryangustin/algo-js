const readlineSync = require("readline-sync");

let number = readlineSync.question('Enter a number between 1 and 7!');

while (number<1 || number>7){
	number = readlineSync.question('Enter a number between 1 and 7!');
}

if (number==1) {
	console.log(number + ' is monday');
}
else if (number==2) {
	console.log(number + ' is tuesday');
}
else if (number==3) {
	console.log(number + ' is wednesday');
}
else if (number==4) {
	console.log(number + ' is thursday');
}
else if (number==5) {
	console.log(number + ' is friday');
}
else if (number==6) {
	console.log(number + ' is saturday');
}
else if (number==7) {
	console.log(number + ' is sunday');
}
else{
	console.log('not a good number');
}

// switch (number>1 || number<7) {
//     case number==1:
//     console.log(number + ' is monday');
//     break;
//     case number==2:
//     console.log(number + ' is tuesday');
//     break;
//     case number==3:
//     console.log(number + ' is wednesday');
//     break;
//     case number==4:
//     console.log(number + ' is thursday');
//     break;
//     case number==5:
//     console.log(number + ' is friday');
//     break;
//     case number==6:
//     console.log(number + ' is saturday');
//     break;
//     case number==7:
//     console.log(number + ' is sunday');
//     break;
//     default:
//     console.log('not a good number');
// }
