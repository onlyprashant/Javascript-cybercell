// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter the base of the triangle: ');
let height = prompt('Enter the height of the triangle: ');
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt('Enter side A of the triangle: ');
let sideB = prompt('Enter side B of the triangle: ');
let sideC = prompt('Enter side C of the triangle: ');
let perimeter = sideA + sideB + sideC;
console.log(`The perimeter of the triangle is ${perimeter}`);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter the length of the rectangle: ');
let width = prompt('Enter the width of the rectangle: ');
let areaRectangle = length * width;
let perimeterRectangle = 2 * (length + width);
console.log(`The area of the rectangle is ${areaRectangle}`);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle (c = 2 x pi x r) where pi = 3.14.
let radius = prompt('Enter the radius of the circle: ');
let areaCircle = 3.14 * radius * radius;
let circumference = 2 * 3.14 * radius;
console.log(`The area of the circle is ${areaCircle}`);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
let xIntercept = -2 / 2;
let yIntercept = 2 * 0 - 2;
console.log(`The x-intercept is ${xIntercept}`);
console.log(`The y-intercept is ${yIntercept}`);

// Slope is (y2 - y1) / (x2 - x1). Find the slope between point (2, 2) and (6, 10)
let slope = (10 - 2) / (6 - 2);
console.log(`The slope is ${slope}`);

// Compare the slope of above two questions.
if (slope === 2) {
    console.log("The slopes are equal.");
} else {
    console.log("The slopes are not equal.");
}

// Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let xValue = -3;
let yValue = xValue * xValue + 6 * xValue + 9;
console.log(`The value of y at x = ${xValue} is ${yValue}`);

// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Enter the number of hours worked: ');
let ratePerHour = prompt('Enter the rate per hour: ');
let pay = hours * ratePerHour;

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = 'Prashant Patel';
if (name.length > 7) {
    console.log('Your name is long.');
} else {
    console.log('Your name is short.');
}

// Compare your first name length and your family name length and you should get this output.
let firstName = 'Prashant';
let lastName = 'Patel';
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else {
    console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`);
}

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 20;
let yourAge = 25;
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log(`You are ${yourAge - myAge} years older than me.`);
}

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let yearBorn = prompt('Enter birth year: ');
const currentYear = new Date().getFullYear();
let age = currentYear - yearBorn;
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
} else {
    console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = prompt('Enter number of years you live:: ');
let seconds = years * 365 * 24 * 60 * 60;
console.log(`You lived ${seconds} seconds.`);

// Create a human readable time format using the Date time object
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();

const format1 = `${year}-${month}-${day} ${hour}:${minute}`;
const format2 = `${day}-${month}-${year} ${hour}:${minute}`;
const format3 = `${day}/${month}/${year} ${hour}:${minute}`;

console.log("YYYY-MM-DD HH:mm:", format1);
console.log("DD-MM-YYYY HH:mm:", format2);
console.log("DD/MM/YYYY HH:mm:", format3);