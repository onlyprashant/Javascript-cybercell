// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Prashant';
let lastName = 'Patel';
let country = 'India';
let city = 'Durgapur';
let age = 20;
let isMarried = false;
let year = 2024;
console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

// Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10); // false

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10); // true

// Boolean value is either true or false.
// Write three JavaScript statements which provide truthy value.
console.log(2 > 1); // true
console.log(5 >= 3); // true
console.log(5 >= 5); // true
// Write three JavaScript statements which provide falsy value.
console.log(34 < 2); // false
console.log(8 <= 5); // false
console.log(7 <= 6); // false

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

// Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length != 'jargon'.length); // false

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true

// Use the Date object to do the following activities
// What is the year today?
let date = new Date();
console.log(date.getFullYear());
// What is the month today as a number?
console.log(date.getMonth());
// What is the date today?
console.log(date.getDate());
// What is the day today as a number?
console.log(date.getDay());
// What is the hours now?
console.log(date.getHours());
// What is the minutes now?
console.log(date.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Math.floor(date.getTime() / 1000));