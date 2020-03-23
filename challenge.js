// 1
// Write a function that takes three arguments - all numbers - adds them together, 
// split the result in 3 and displays the result on the console.

	// function challenge(x,y,z) {
	// 	var num = (x+y+z)/3;
	// 	console.log(num)
	// }

// 2
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

	// var empty = [];

	// function challenge2 (array) {
	// for (var i = 0; i < array.length; i++) {
	// 	if (array[i] % 3 === 0) {
	// 		empty.push(array[i]);
	// 	}}
	// console.log (empty);
	// }

	// challenge2([1,2,3,6,9]);


// 3
// Write a function that takes an array of numbers as argument and lists in another array all numbers bigger than 10; 
// if there are no numbers bigger than ten just console.log("no numbers bigger than 10");
 
	//  function tenPlus (numbers) {
	//  	var empty = [];
	//  	for (var i = 0; i < numbers.length; i++){
	//  		if (numbers[i] > 10) {
	//  			empty.push(numbers[i]);
	//  		}}
	//  		console.log(empty);
	//  		if (empty.length === 0){
	//  			console.log ("There are no numberse greater than 10.")
	//  		}}
	// tenPlus([5,2,15]);

// 4
// Write a function that takes a string as an argument and returns (console.logs) all the vowels in this string

	// function vowels (string) {
	// 	var letters = string.split("");
	// 	var empty = [];
	// 	for (var i = 0; i < letters.length; i++){
	//  		if ((letters[i] === "a") || 
	//  			(letters[i] === "e") || 
	//  			(letters[i] === "i") || 
	//  			(letters[i] === "o") || 
	//  			(letters[i] === "u")) 
	//  		{
	//  			empty.push(letters[i]);
	//  		}}
	//  		console.log(empty.join(","));
	// }

// 5
// Write a function that takes a string sentence as an argument and lists all the words that are longer than 5 characters in this sentence. 
// IF there is no word longer than five characters console.log('very short words")

	// function sentence(arg) {
	// 	var empty = [];
	// 	var words = arg.split(" ");
	// 	for(var i = 0; i < words.length; i++){
	// 		if (words[i].length > 5) {
	// 			empty.push(words[i]);
	// 		}}
	// console.log(empty);
	// 		if (empty.length === 0) {
	// 			console.log("These are very short words.");
	// 		}
	// 	}

// 6
// Write a function that lists all the numbers from 0 to 100; If a number is divisible by 3 console.log("Fizz"); 
// if a number is divisible by 5, console.log("Buzz"); if a number is divisible by both 3 and 5 console.log("FizzBuzz")

	 // function fizzBuzz () {
		// 	for( var i = 0; i <101; i++){
		// if ((i % 3 === 0) && (i % 5 === 0)) {
		//         console.log("FizzBuzz"); }

		//       	else if (i % 3 === 0) {
		//         console.log("Fizz"); }

		//      	else if (i % 5 === 0) {
		//         console.log("Buzz"); }

		//     	else {
		//         console.log(i);}
		// }}

		// fizzBuzz();

// 7
// Create a function that takes in a string of multiple words and returns the first word with “ish” added to the end. 
// Example: ishFunc(“Soup is my favorite.“) -> “Soupish”

	// function ishFunc (string) {
	// 	var stringArray = string.split(" ").reverse();
	// 	firstWord = stringArray.pop();
	// 	var halfSentence = stringArray.reverse().join(" ");
	// 	var ishWord = (firstWord + "ish");
		
	// 	console.log(ishWord + " " + halfSentence); 
	// }

	// ishFunc ("Hello my name is Emily");

// 8
// Write a function that takes and array of numbers and adds the sum of them.

	// function adding (array) {
	// 	var sum = 0;
	// 	for(var i = 0; i < array.length; i++){
	// 		sum = sum + array[i]
	// 	}
	// 		console.log(sum)
	// }

	// adding([1,2,3])


// 9
// Write a function that takes a string argument and returns all the instances of vowels 
// ex. -> “whatever” - returns “aee”

	// function vowels (string) {
	// 	var letters = string.split("");
	// 	var empty = [];
	// 	for (var i = 0; i < letters.length; i++){
	//  		if ((letters[i] === "a") || 
	//  			(letters[i] === "e") || 
	//  			(letters[i] === "i") || 
	//  			(letters[i] === "o") || 
	//  			(letters[i] === "u")) 
	//  		{
	//  			empty.push(letters[i]);
	//  		}}
	//  		console.log(empty.join(""));
	// }

	// vowels ("The little mermaid is under the sea")

// 10
// Create an array. Using the .forEach() method on the array, print each element to  the console.
// If you are unsure on how to use .forEach(), Google it.

	// var months = ["May","June","July","August"];

	// function month(item) {
	//   console.log(item);
	// }

	// months.forEach(month);


// 11 
// Create a function that takes an array. 
// Check to see if it contains a 5 or 6. If it does, return true, otherwise return false. 
// Example:
// checkNums( [1, 3, 5, 12, 22] ) -> true
// checkNums( [30, 99, 8, 22, 7] ) -> false

	// function checkNums (array) {
	// 	for (var i=0; i < array.length; i++) {
	// 		if ((array[i] ===  5) || (array[i] === 6)) {
	// 			console.log("true");
	// 		}
	// 		else {
	// 			console.log("false");
	// 		}
	// 	}

	// }

	// checkNums ([1,5,3,4,6])


