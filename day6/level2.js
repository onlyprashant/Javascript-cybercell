function generateRandomID(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomID = '';
    for (let i = 0; i < length; i++) {
        randomID += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomID;
}
console.log(generateRandomID(12)); // Example usage: Generate a random ID with 12 characters

function generateRandomHexColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += Math.floor(Math.random() * 16).toString(16);
    }
    return hexColor;
}
console.log(generateRandomHexColor());

function generateRandomRGBColor() {
    let rgbColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return rgbColor;
}
console.log(generateRandomRGBColor());

const countriesUppercase = countries.map(country => country.toUpperCase());
console.log(countriesUppercase);

const countriesLengths = countries.map(country => country.length);
console.log(countriesLengths);

const countriesInfo = countries.map(country => [country, country.substring(0, 3).toUpperCase(), country.length]);
console.log(countriesInfo);

const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
} else {
    console.log('All these countries are without land');
}

const countriesEndsWithIA = countries.filter(country => country.toLowerCase().endsWith('ia'));
if (countriesEndsWithIA.length > 0) {
    console.log(countriesEndsWithIA);
} else {
    console.log('These are countries ends without ia');
}

const countryWithLongestName = countries.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
console.log(countryWithLongestName);

const countriesWithFiveCharacters = countries.filter(country => country.length === 5);
console.log(countriesWithFiveCharacters);

const longestWord = webTechs.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
console.log('Longest word:', longestWord);

const webTechsInfo = webTechs.map(tech => [tech, tech.length]);
console.log(webTechsInfo);

const mernAcronym = mernStack.join('');
console.log('MERN Acronym:', mernAcronym);

for (let tech of ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB']) {
    console.log(tech);
}

const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i]);
}
console.log('Reversed fruits:', reversedFruits);

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
for (let stack of fullStack) {
    for (let tech of stack) {
        console.log(tech);
    }
}
