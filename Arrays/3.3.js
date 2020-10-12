// first array
// let array = [];
// let newArray = [];
// for(let i=1; i<=303; i++) {
// 	array[i] =  i;
// }
// newArray=array.slice();
// console.log(newArray);


let array = [];
let newArray = [];
for(let i=1; i<=303; i++) {
	array[i] =  i;
}
for(let j=0; j<array.length; j++){
	newArray.push(array[j]);
}
console.log(newArray);