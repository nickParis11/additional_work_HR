/*
Write a function called "isEven".

Given an array of numbers, "isEven" returns a new array 
that contains only the even numbers of the input array. 

For example...

var output = isEven([1, 4, 5, 6, 10, 13]);
console.log(output); // --> [4, 6, 10]
*/

// Starter code

var arrayNums=[1, 4, 5, 6, 10, 13,'eee',145685217,2365488,'eekm8'];

function isEven(nums) {
 return nums.filter(number=>number%2===0)
}

console.log('isEven = '+JSON.stringify(isEven(arrayNums)));

// try with regExp
function isEven2(nums) {
	// fisrt version with fully backed implementation => 
	return nums.filter(num=> num.toString().search(/^(?:\d*)[0,2,4,6,8]$/g) !== -1)
	// with positive look ahead = > return nums.filter(num=> num.toString().search(/^(?:\d*)[0,2,4,6,8]$/g) !== -1)
	// cleaner => return nums.filter(num=> num.toString().search(/\d*[0,2,4,6,8]$/) !== -1)
	// even cleaner => return nums.filter(num=> num.toString().search(/[0,2,4,6,8]$/) !== -1) // allow string that would end by numbers though
	// shorter but also allow string that would end by numbers allow string =>  return nums.filter(num=> num.toString().search(/.*[0,2,4,6,8]/) !== -1)
}

console.log('isEven2 = '+JSON.stringify(isEven2(arrayNums)));

function assertArraysEqual(actual, expected, testName) { // ********** BUGGED VERSION SEE AN EXAMPLE OF THE BUG HERE : https://repl.it/HOkE/2
  return actual.filter(function(arrElement,index){
  	return arrElement === expected[index];
  }).length === expected.length ? "passed" : " FAIL [ "+testName+" ] expected "+expected+" but got "+actual;
}

console.log(assertArraysEqual(isEven(arrayNums),[4,6,10,2365488],' outputing only even numbers in an array, given an array of numbers'))

console.log(assertArraysEqual(isEven2(arrayNums),[4,6,10,2365488],' in isEven2 outputing only even numbers in an array, given an array of numbers'))