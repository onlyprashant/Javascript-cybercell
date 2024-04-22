// Using for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Using while loop
let j = 0;
while (j <= 10) {
    console.log(j);
    j++;
}

// Using do-while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k <= 10);
// Using for loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// Using while loop
let a = 10;
while (a >= 0) {
    console.log(a);
    a--;
}

// Using do-while loop
let b = 10;
do {
    console.log(b);
    b--;
} while (b >= 0);

const n = 5;
for (let i = 0; i <= n; i++) {
    console.log(i);
}

for (let i = 1; i <= 7; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '#';
    }
    console.log(pattern);
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

console.log('i  i^2  i^3');
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i ** 2}  ${i ** 3}`);
}

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log('The sum of all numbers from 0 to 100 is', sum);

let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i;
    } else {
        sumOdds += i;
    }
}
console.log('The sum of all evens from 0 to 100 is', sumEvens);
console.log('The sum of all odds from 0 to 100 is', sumOdds);


let sums = [0, 0];
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sums[0] += i;
    } else {
        sums[1] += i;
    }
}
console.log('Sum of evens and odds:', sums);

let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log('Array of random numbers:', randomNumbers);

let uniqueRandomNumbers = [];
while (uniqueRandomNumbers.length < 5) {
    let randomNumber = Math.floor(Math.random() * 100);
    if (!uniqueRandomNumbers.includes(randomNumber)) {
        uniqueRandomNumbers.push(randomNumber);
    }
}
console.log('Array of unique random numbers:', uniqueRandomNumbers);

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomID = '';
for (let i = 0; i < 6; i++) {
    randomID += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log('Random ID:', randomID);
