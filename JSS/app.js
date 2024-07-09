/*-----------------------------------------------------------------
Challenge: 00-sayHello (example)
Difficulty: Basic
Prompt:
Write a function called sayHello that returns the string "Hello!".
Examples:
sayHello() //=> Hello!
-----------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:

// Declared function sayHello()
function sayHello() {
  return "Hello!";
}

const mainEl = document.querySelector("body");

const title = document.createElement("h1");
const text = "Day 1";
title.innerText = text;
mainEl.appendChild(title);
const result = document.createElement("h3");
const day1result = sayHello();
result.innerText = day1result;
mainEl.appendChild(result);
console.log(sayHello);

/*-----------------------------------------------------------------
Challenge: 01-addOne
Difficulty: Basic
Prompt:
Write a function called addOne that takes a single number as an argument and returns that number plus 1.
Examples:
addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------*/
// Your solution for 01-addOne here:

// Delared function addOne
function addOne(num) {
  return num + 1;
}
// Test variable num
const num = 24;

// Print result to console
console.log(addOne(num));

/*-----------------------------------------------------------------
Challenge: 02-addTwoNumbers
Difficulty: Basic  
Prompt:
Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.
Examples:
addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

// Declared function addTwoNumbers
function addTwoNumbers(num1, num2) {
  // Logical check to see if both inputs are numbers
  if (isNaN(num1) || isNaN(num2)) {
    return NaN; // Outtput to console for non numerical inputs
  } else {
    return num1 + num2; // Output of sum to console.
  }
}

console.log(addTwoNumbers(5, 13)); // test print to console

/*-----------------------------------------------------------------
Challenge: 03-sumNumbers
Difficulty: Basic
Prompt:
- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).
Examples:
sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

// Declared function sumNumbers
function sumNumbers(arr) {
  // Data type to hold sum of array
  let sum = 0;
  // For loop used to iterate array
  for (let i = 0; i < arr.length; i++) {
    // Add each array element to sum at each iteration
    sum += arr[i];
  }
  // Function returns the sum
  return sum;
}
// Test data arr
let arr = [2, 10, -5];
// Print array to console
console.log(sumNumbers(arr));

/*-----------------------------------------------------------------
Challenge: 04-addList
Difficulty: Basic
Prompt:
- Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).
Examples:
add(1) //=> 1
add(1, 50, 1.23) //=> 52.23
add(7, -12) //=> -5

Hint:  Check out the Further Study section of the JS Functions lesson regarding "rest parameters"
-----------------------------------------------------------------*/
// Your solution for 04-addList here:

// Declared function addList
function addList(...numbers) {
  // Variable 'total' to hold sum of all numbers
  let total = 0;
  // for loop to iterate any number of values
  for (const num of numbers) {
    // add each value to 'total'
    total += num;
  }
  // Function returns 'total'
  return total;
}
console.log("addList: " + addList(1, 50, 1.23));
