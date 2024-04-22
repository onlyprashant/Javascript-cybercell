// 1. Modify the userIdGenerator function to generate user IDs based on user input
function userIdGeneratedByUser() {
    const numChars = parseInt(prompt("Enter the number of characters for each ID:"));
    const numIds = parseInt(prompt("Enter the number of IDs to generate:"));
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userIds = '';
    for (let i = 0; i < numIds; i++) {
        let userId = '';
        for (let j = 0; j < numChars; j++) {
            userId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        userIds += userId + '\n';
    }
    return userIds;
}

// 2. Function to generate a random RGB color
function rgbColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// 3. Function to generate an array of hexadecimal colors
function arrayOfHexaColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        colors.push(randomHexaNumberGenerator());
    }
    return colors;
}

// 4. Function to generate an array of RGB colors
function arrayOfRgbColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        colors.push(rgbColorGenerator());
    }
    return colors;
}

// 5. Function to convert hexa color to RGB
function convertHexaToRgb(hexColor) {
    const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const result = hexRegex.exec(hexColor);
    if (!result) return null;
    return `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})`;
}

// 6. Function to convert RGB color to hexa
function convertRgbToHexa(rgbColor) {
    const rgbRegex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    const result = rgbRegex.exec(rgbColor);
    if (!result) return null;
    return `#${parseInt(result[1]).toString(16).padStart(2, '0')}${parseInt(result[2]).toString(16).padStart(2, '0')}${parseInt(result[3]).toString(16).padStart(2, '0')}`;
}

// 7. Function to generate colors based on type and number
function generateColors(type, numColors) {
    if (type === 'hexa') {
        return arrayOfHexaColors(numColors);
    } else if (type === 'rgb') {
        return arrayOfRgbColors(numColors);
    } else {
        return 'Invalid type';
    }
}

// 8. Function to shuffle an array
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 9. Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 10. Function to check if a value is empty
function isEmpty(value) {
    return value === undefined || value === null || value === '';
}

// 11. Function to calculate sum of arguments
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

// 12. Function to calculate sum of array items
function sumOfArrayItems(arr) {
    if (!arr.every(item => typeof item === 'number')) {
        return 'Array contains non-numeric items';
    }
    return arr.reduce((acc, val) => acc + val, 0);
}

// 13. Function to calculate average of array items
function average(arr) {
    if (!arr.every(item => typeof item === 'number')) {
        return 'Array contains non-numeric items';
    }
    return sumOfArrayItems(arr) / arr.length;
}

// 14. Function to modify fifth item of array
function modifyArray(arr) {
    if (arr.length < 5) return 'Not Found';
    arr[4] = arr[4].toUpperCase();
    return arr;
}

// 15. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// 16. Function to check if all items in an array are unique
function areAllUnique(arr) {
    return arr.length === new Set(arr).size;
}

// 17. Function to check if all items in an array are of the same type
function areAllSameType(arr) {
    return arr.every(item => typeof item === typeof arr[0]);
}

// 18. Function to check if a variable name is valid
function isValidVariable(variable) {
    const regex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    return regex.test(variable);
}

// 19. Function to generate an array of unique random numbers in a range
function sevenRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 7) {
        numbers.add(Math.floor(Math.random() * 10));
    }
    return Array.from(numbers);
}

// 20. Function to reverse the countries array
function reverseCountries(countries) {
    return countries.slice().reverse();
}

