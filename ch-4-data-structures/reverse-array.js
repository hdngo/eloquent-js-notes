function reverseArray(array){
	reversedArray = []
	for(var index = array.length - 1; index >= 0; index--){
		reversedArray.push(array[index])
	}
	return reversedArray
}

console.log(reverseArray([1,2,3,4]))


//looked at solution for this one
function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
  	//if there's a middle, we just keep it as it is
    var old = array[i];
    //store the value of the current element in the array somewhere
    array[i] = array[array.length - 1 - i];
    //set the value of the current aray in the element to be the element INDEX number of spaces from the end of the array
    array[array.length - 1 - i] = old;
    //set the element that is INDEX number of spaces from the end to be the value of the current element in the array that was stored in the variable old
  }
  return array;
}