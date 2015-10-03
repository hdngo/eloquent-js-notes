// var ANCESTRY_FILE = require('./ancestry.js')
// var ancestry = JSON.parse(ANCESTRY_FILE)

var ancestry = JSON.parse(require('./ancestry.js'))

console.log(ancestry)

function average(array){
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
})

//not all mothers are present

var ageDifferences = ancestry.filter(function(person){
	return byName[person.mother] != null;
	//for the new array, only add the current person if their mother exists in the dataset	
}).map(function(person){
	return person.born - byName[person.mother].born
	//with the array returned from the filter function, map it to be equal to the person's date of birth year minus his/her mother's date of birth year
})

console.log(average(ageDifferences));
// 31.2