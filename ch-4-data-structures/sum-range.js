var range = function(start, end){
	var numbers = []
	for(var index = start; index <= end; index++){
		numbers.push(index)
	}
	return numbers
}

console.log(range(1,10))

var sum = function(arrayOfNumbers){
	var arraySum = 0;
	for(arrayIndex in arrayOfNumbers){
		arraySum += arrayOfNumbers[arrayIndex];
	}
	return arraySum
}

console.log(sum(range(1,10)))

//modified with step value
//first inner if/else handles a given step value
//second inner if/else handles no given step value

var rangeWithStep = function(start, end, step){
	var numbers = []
	if(arguments.length == 3){
		if(step > 0)
			for(var index = start; index <= end; index+= step){
				numbers.push(index)
			}
		else{
			for(var index = start; index >= end; index+= step){
				numbers.push(index)
			}
		}
	}
	else
		if(start < end)
			for(var index = start; index >= end; index++){
				numbers.push(index)
			}
		else if(start > end){
			for(var index = start; index >= end; index--){
				numbers.push(index)
			}
		}
	return numbers
}

console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(5, 2, -2));
console.log(rangeWithStep(5, 2));
