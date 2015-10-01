var countChar = function(userString, targetLetter){
	var targetLetterCount = 0;
	userString.split("").forEach(function(letter){
		if(letter === targetLetter)
			targetLetterCount +=1
	})
	return targetLetterCount
}

function countBs(userString){
	return countChar(userString, "B")
}

console.log(countChar("kakkerlak", "k"))
console.log(countBs("BBC"))

// Part 1
// var countBs = function(userString){
// 	var bCount = 0;
// 	userString.split("").forEach(function(letter){
// 		if(letter === "B")
// 			bCount += 1
// 	})
// 	return bCount
// }

// console.log(countBs("BBC"))