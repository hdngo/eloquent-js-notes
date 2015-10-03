function arrayToList(array){
	var list = null;
	for(var index = array.length - 1; index >= 0; index--){
		//build backwards because the last object is null
		list = {value: array[index], rest: list}
		//first iteration list is initially set to null, but then makes list equal to value: 20, rest: none
		//second iteration has value 10, and list equal to the previous iterations value
	}
	return list
}

console.log(arrayToList([10, 20]))

function listToArray(list){
	var array = []
	//from hint
	for(var node = list; node; node = node.rest){
		array.push(node.value)
	}
	//the for loop params basically say,for each element/node within the list, push the current node.value, and then for the next iteration set node equal to whatever node.rest (sublist) is
	return array
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

function prepend(value, list){
	return {value: value, rest: list}
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

//looked at solution for recursive call
function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
  //if n is > 0, we move to the next sublist (so we've traversed through 1 node, and have n-1 nodes to check through, once n = 0, we've traversed n nodes and return the value there)
} 

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20