let array= [2,28,98,34,62,12];
let min=array[0];
let max=array[0];

for (let i=0; i<array.length; i++){
	if (array[i]>max) {
		max=array[i];
	}
	else if(array[i]<min){
		min=array[i];
	}
}
console.log("la valeur minimum est " + min + " et la valeur maximum est " + max);