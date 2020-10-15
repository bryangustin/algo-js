const readlineSync = require("readline-sync");
function askTvSerie(){
	let name = readlineSync.question('which series do you like ?');
	let year = readlineSync.question('year?');
	let myObject = {
		"serie_Name":name,
		"production_Year":year,
		"member_Cast_Name":getName()
	}
	return myObject;
}
function getName(){
	let namesArray=[];
	let nameCastMembers= null;

	do{
		nameCastMembers = readlineSync.question('whats the name of the actor?');
		if(nameCastMembers != ""){
			namesArray.push({actor:nameCastMembers});

		}
	}
	while (nameCastMembers != "");
	return namesArray;
}

console.log(askTvSerie());