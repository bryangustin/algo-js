let array = [];
let somme= 0;
for(let i=1; i<=303; i++) {
	array[i] =  i;
	somme+=i;
}
console.log(somme/array.length);