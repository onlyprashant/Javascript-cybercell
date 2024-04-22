// Get user input
const age = parseInt(prompt("Enter your age:"));

// Check if user is 18 or older
if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    const yearsToDrive = 18 - age;
    console.log("You are left with " + yearsToDrive + " years to drive.");
}
// Get user input for your age
const yourAge = parseInt(prompt("Enter your age:"));

// Assuming there's a variable myAge with your age stored in it
const myAge = 30; // You can replace this with your actual age or retrieve it in some other way

// Compare the values of myAge and yourAge
if (myAge > yourAge) {
    console.log("You are " + (myAge - yourAge) + " years younger than me.");
} else if (myAge < yourAge) {
    console.log("You are " + (yourAge - myAge) + " years older than me.");
} else {
    console.log("We are the same age.");
}
// Using if...else
let a = 4;
let b = 3;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than or equal to b");
}

// Using ternary operator
console.log(a > b ? "a is greater than b" : "a is less than or equal to b");

// Get user input
const number = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (number % 2 === 0) {
    console.log(number + " is an even number");
} else {
    console.log(number + " is an odd number");
}