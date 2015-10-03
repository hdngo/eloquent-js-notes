var ancestry = JSON.parse(require('./ancestry.js'))
//note to self: learned that you can use jquery to get scripts from another file

function average(array){
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

//group the people in the dataset by their year of death (century)

function groupBy(array, groupOf){
	var groups = {};
	array.forEach(function(element){
		var groupName = groupOf(element)
		if(groupName in groups)
			groups[groupName].push(element)
			//if the groupName (century) already exists as a property of the groups object, push the current element (person) into it
		else
			groups[groupName] = [element];
			//if the groupName (century) doesn't exist yet, add it and set add the current person into the collection 
	})
	return groups;
}

var byCentury = groupBy(ancestry, function(person){
	return Math.ceil(person.died / 100);
	//based on the hint, we group people byCentury where the century is the year they died / 100 rounded up (i.e. 1820 = 19th)
})
//the byCentury variable is equal to the result of calling groupBy on ancestry where the combining function is the anonymous function - function(person){return Math.ceil...} 
//so the way it works is that on the first iteration, for each person in the dataset, we call the anonymous function on the person, which sets the groupName to be the century in which the person died
//it then checks to see if that groupName already exists as noted earlier and executes based on the conditional expressions

//now that we have byCentury populated with centuries as keys/props that point to an array containing people in each century..
for(var century in byCentury){
	//transform the array of people for each century and map it to equal age (person.died - person.born)
	var ages = byCentury[century].map(function(person){
		return person.died - person.born;
	})
	console.log(century + ": " + average(ages));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
