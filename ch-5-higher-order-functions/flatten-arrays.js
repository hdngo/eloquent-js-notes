var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current){
	return flat.concat(current)
}, []));

//works by reducing the array, where the combining function is an anonymous function(flat, current) that concats the current array element to flat, which we initialized as an empty array by passing in [] as our start argument