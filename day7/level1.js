// 1. Function to print full name
function fullName() {
    console.log('John Doe');
}

// 2. Function to return full name
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// 3. Function to add numbers
function addNumbers(a, b) {
    return a + b;
}

// 4. Function to calculate area of rectangle
function areaOfRectangle(length, width) {
    return length * width;
}

// 5. Function to calculate perimeter of rectangle
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

// 6. Function to calculate volume of rectangular prism
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}

// 7. Function to calculate area of circle
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

// 8. Function to calculate circumference of circle
function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
}

// 9. Function to calculate density
function density(mass, volume) {
    return mass / volume;
}

// 10. Function to calculate speed
function speed(distance, time) {
    return distance / time;
}

// 11. Function to calculate weight
function weight(mass, gravity) {
    return mass * gravity;
}

// 12. Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 13. Function to calculate BMI and classify weight group
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

// 14. Function to check season based on month
function checkSeason(month) {
    switch (month) {
        case 'January':
        case 'February':
        case 'December':
            return 'Winter';
        case 'March':
        case 'April':
        case 'May':
            return 'Spring';
        case 'June':
        case 'July':
        case 'August':
            return 'Summer';
        case 'September':
        case 'October':
        case 'November':
            return 'Autumn';
        default:
            return 'Invalid month';
    }
}

// 15. Function to find maximum of three numbers
function findMax(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

console.log(findMax(0, 10, 5)); // Output: 10
console.log(findMax(0, -10, -2)); // Output: 0
