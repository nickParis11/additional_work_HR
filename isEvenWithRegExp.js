/*
Write a function called "isEven".

Given an array of numbers, "isEven" returns a new array 
that contains only the even numbers of the input array. 

For example...

var output = isEven([1, 4, 5, 6, 10, 13]);
console.log(output); // --> [4, 6, 10]
*/

// Starter code

function isEven(nums) {
 return nums.filter(number=>number%2===0)
}
console.log(isEven([1, 4, 5, 6, 10, 13]))

// try with regExp
function isEven2(nums) {
	return nums.filter(num=> num.toString().search(/^\d*[0,2,4,6,8]$/g) !== -1)
	// cleaner => return nums.filter(num=> num.toString().search(/\d*[0,2,4,6,8]/) !== -1)
}

console.log(isEven2([1, 4, 5, 6, 10, 13]))

function assertArraysEqual(actual, expected, testName) { // ********** BUGGED VERSION SEE AN EXAMPLE OF THE BUG HERE : https://repl.it/HOkE/2
  return actual.filter(function(arrElement,index){
  	return arrElement === expected[index];
  }).length === actual.length ? "passed" : " FAIL [ "+testName+" ] expected "+expected+" but got "+actual;
}

console.log(assertArraysEqual(isEven([1, 4, 5, 6, 10, 13]),[4, 6, 10],' outputing only even numbers in an array, given an array of numbers'))

console.log(assertArraysEqual(isEven2([1, 4, 5, 6, 10, 13]),[4, 6, 10],' in isEven2 outputing only even numbers in an array, given an array of numbers'))