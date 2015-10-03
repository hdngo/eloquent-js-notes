function deepEqual(firstValue, secondValue){
	if(firstValue === secondValue){
		return true
	}

	if(firstValue == null || typeof firstValue != "object" || secondValue == null || typeof secondValue != "object"){
		return false;
	}

	var propsInFirstValue = 0; propsInSecondValue = 0;

	//looked at solution for simpler syntax, initially planned on using Object.keys(obj) and Object.hasOwnProperty(key)
	for(var prop in firstValue){
		propsInFirstValue += 1;
	}
	//get number of keys/props of first arg

	for(var prop in secondValue){
		propsInSecondValue += 1;
		//for each prop in second arg, augment props count value
		if(!(prop in firstValue) || !deepEqual(firstValue[prop], secondValue[prop])){
			return false;
		}
		//if this prop does not exist in the first arg, or the value of this prop in a is not equal to the value of this prop in b, return false and terminate function
	}


	return propsInFirstValue == propsInSecondValue
	//returns true if the above loop doesn't terminate prematurely
	
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true