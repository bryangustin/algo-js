function calcDistance(x1,y1,x2,y2){
	let a = x2 - x1;
	let b = y2 - y1;
	let distance = Math.sqrt(a * a + b * b);
	return distance;
}

console.log(calcDistance(1,1,2,2));
