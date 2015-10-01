// var boardSize = 8;
// for(var rowIndex = 0; rowIndex < boardSize; rowIndex++){
// 	var line = "";
// 	for(var colIndex = 0; colIndex < boardSize; colIndex++){
// 		var sumIndices = rowIndex + colIndex;
// 		if(sumIndices % 2 === 0){
// 			line += " "
// 		}
// 		else{
// 			line += "#"
// 		}
// 	}
// 	console.log(line)
// }

//didn't use new line character

var makeBoard = function(width, height){
	for(var rowIndex = 0; rowIndex < height; rowIndex++){
		var line = "";
		for(var colIndex = 0; colIndex < width; colIndex++){
			var sumIndices = rowIndex + colIndex;
			if(sumIndices % 2 === 0){
				line += " "
			}
			else{
				line += "#"
			}
		}
		console.log(line)
	}
}

console.log("3 x 5")
makeBoard(3,5)
console.log("6 x 8")
makeBoard(6,8)
//may look into using new line later for practice