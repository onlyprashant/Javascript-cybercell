// 1. Function to solve a linear equation ax + by + c = 0
function solveLinEquation(a, b, c) {
    if (a === 0 && b === 0) {
        return 'Invalid equation';
    } else if (b === 0) {
        return -c / a;
    } else if (a === 0) {
        return -c / b;
    } else {
        return { x: -c / a, y: -c / b };
    }
}

// 2. Function to solve a quadratic equation ax^2 + bx + c = 0
function solveQuadEquation(a = 0, b = 0, c = 0) {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
        return 'No real roots';
    } else if (delta === 0) {
        return -b / (2 * a);
    } else {
        const root1 = (-b + Math.sqrt(delta)) / (2 * a);
        const root2 = (-b - Math.sqrt(delta)) / (2 * a);
        return { root1, root2 };
    }
}

// 3. Function to print array values
function printArray(arr) {
    arr.forEach(item => console.log(item));
}

// 4. Function to show date and time
function showDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    console.log(`${date} ${time}`);
}

// 5. Function to swap values
function swapValues(x, y) {
    return [y, x];
}

// 6. Function to reverse array
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// 7. Function to capitalize array
function capitalizeArray(arr) {
    return arr.map(item => item.toUpperCase());
}

// 8. Function to add item to array
function addItem(arr, item) {
    return [...arr, item];
}

// 9. Function to remove item from array by index
function removeItem(arr, index) {
    return arr.filter((_, i) => i !== index);
}

// 10. Function to calculate sum of numbers in a range
function sumOfNumbers(n) {
    return (n * (n + 1)) / 2;
}

// 11. Function to calculate sum of odd numbers in a range
function sumOfOdds(n) {
    return Math.ceil(n / 2) ** 2;
}

// 12. Function to calculate sum of even numbers in a range
function sumOfEven(n) {
    return Math.floor(n / 2) * (Math.floor(n / 2) + 1);
}

// 13. Function to count evens and odds in a number
function evensAndOdds(n) {
    const evens = Math.floor(n / 2);
    const odds = Math.ceil(n / 2);
    return `The number of odds are ${odds}.\nThe number of evens are ${evens}.`;
}

// 14. Function to calculate sum of arguments
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

// 15. Function to generate a random user IP
function randomUserIp() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

// 16. Function to generate a random MAC address
function randomMacAddress() {
    const hexDigits = '0123456789ABCDEF';
    let macAddress = '';
    for (let i = 0; i < 6; i++) {
        macAddress += hexDigits[Math.floor(Math.random() * 16)];
        macAddress += hexDigits[Math.floor(Math.random() * 16)];
        if (i < 5) macAddress += ':';
    }
    return macAddress;
}

// 17. Function to generate a random hexadecimal number
function randomHexaNumberGenerator() {
    const hexDigits = '0123456789ABCDEF';
    let hexNumber = '#';
    for (let i = 0; i < 6; i++) {
        hexNumber += hexDigits[Math.floor(Math.random() * 16)];
    }
    return hexNumber;
}

// 18. Function to generate a seven-character user ID
function userIdGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userId = '';
    for (let i = 0; i < 7; i++) {
        userId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return userId;
}

