// Write a function that takes three arguments - all numbers - adds them together, 
// split the result in 3 and displays the result on the console.

// function challenge(x,y,z) {
// 	var num = (x+y+z)/3;
// 	console.log(num)
// }


// Write a function that takes an array of numbers as an argument.
// Then it lists ONLY the numbers that are divisible by 3  
// If there are not such numbers console.log(“Sorry, no 3-divisible numbers”). (Think of push() method)

// function three (array) {
// 	var array = [];
// 	for (var i = 0; i < array.length; i++) {
// 	if (array[i] % 3 == 0 ) {
// 		array.push(array[i])
// 	}}}

// console.log ([1,2,3])

// function challenge2 (array) {
// 	var empty = [];
// for (var i = 0; i < array.length; i++) {
// 	if (array[i] % 3 === 0) {
// 		empty.push (array[i]);
// 	}}
// }

var empty = [];

function challenge2 (array) {
for (var i = 0; i < array.length; i++) {
	if (array[i] % 3 === 0) {
		empty.push(array[i]);
	}}
console.log (empty);
}

challenge2([1,2,3,6,9]);





