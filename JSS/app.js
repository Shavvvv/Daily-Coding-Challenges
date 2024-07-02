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
  return 'Hello!';
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
console.log(sayHello)
