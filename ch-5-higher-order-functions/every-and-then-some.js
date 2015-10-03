function every(array, predicateFunction){
	for(var index = 0; index < array.length; index++){
		if(!predicateFunction(array[index]))
			return false
	}
	return true
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false

function some(array, predicateFunction){
	for(var index = 0; index < array.length; index++){
		if(predicateFunction(array[index]))
			return true
	}
	return false
}

console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false