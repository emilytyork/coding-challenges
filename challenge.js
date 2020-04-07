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

// 12  
// add the sum from the array below:
	//  var obj = {
	//  	name: 'torture',
	//  	miniObj: {
	//  		name: 'Minitorture',
	//  		array: [{numbers: [['a','b','c','d'], [1,2,3,4,5,6,7,8,9], ['fun']]}]
	//  	}
	//  }

	// var sum = 0;
	// var array = (obj.miniObj.array[0].numbers[1]);

	// 	for (var i = 0; i < array.length; i++) {
	// 		sum = sum + array[i];
	// 	}
	// console.log(sum);


	// function adding (array) {
	// 	var sum = 0;
	// 	for(var i = 0; i < array.length; i++){
	// 		sum = sum + array[i]
	// 	}
	// 		console.log(sum)


// 13
// Write a function that takes an array of numbers and creates a new array with
// only the even numbers from the first array. For instance,
// if you pass your function an array of [1, 3, 4, 6, 9], your function
//  should return [4, 6].

	// var array = [1,2,3,4];
	// var newArray = [];

	// function evenNumbers () {
	// 	for(var i=0; i<array.length; i++) {
	// 	if (array[i] % 2 === 0) {
	// 		newArray.push(array[i]);
	// 	}}
	// console.log(newArray)
	// }

	// evenNumbers();

// 14
// write a function that takes an array of names and returns a whole string of 
// these names with comma and the word ‘and’ before the last name;
// [“John”, “George”, “James”, “Anna”] ---> “John, George, James, and Anna”;

// pull out last word add and to front put back in array


// var names = ["Emily","Dan","Laura","Andrew"];

//  function and () {
// 	var andName = (", and " + names.pop());
// 	var newNames=(names.join(", "))
// 	var nameSentence = newNames + andName;
// console.log(nameSentence);
// }

// and();

// // 15
// // write a function named stringy that takes a size and returns a
// // string of alternating ‘1s’ and ‘0s’. the string should start with a 1.
// // a string with size 6 should return
// //  :‘101010’. with size 4 should return : ‘1010’. with size 12 should
// // return : ‘101010101010’. The size will always be positive and will only use
// // whole numbers.


//   function stringy (size) {
//   	var array = [];
//   	var halfSize = size/2;
 
//  if (size % 2 === 0 ) {
//  	for (i = 0; i<halfSize; i++){
//  		array.push("10");
//  }
//  }
//  console.log(array.join(""))
// }
//  stringy(6)


// 16
// Given a non-negative integer, return an array containing a list
// of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

// function numbers (a) {
// 	var newNumbers = [];
//     var digits= a.toString().split('').reverse();

//     for (var i=0; i<digits.length;i++){
//     	newNumbers.push(parseInt(digits[i]));
//     }

//  console.log(newNumbers);
// }
//  numbers(325245);

// 17
// given a string, create a function that returns the last character in that string.
// examples:
// “morning” --> g
// “winter” --> r

	// function lastLetter (word) {
	// 	var splitWord= word.split('').pop();
	// console.log(splitWord)
	// }

	// lastLetter("winter");

// 18
// write a function that takes in a math operator as a string followed by two parameters, x and y, then
//  return the result of that math operation applied to the two parameters.
//  examples:
//  math(“*”, 2, 3) ---> 6
//  math(“+”, 4, 5) ---> 9
// math(“/”, 5, 5) ---> 1
// math(“*”, 4, 5) ---> 20

// function math (operator,x,y) {

// if (operator === "+"){
// 	console.log(x+y);
// }

// else if (operator === "-"){
// 	console.log(x-y);
// }

// else if (operator === "*"){
// 	console.log(x*y);
// }

// else if (operator === "/"){
// 	console.log(x/y);
// }

// }












