//counting words
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length);
//Shopping cart operations
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// Add 'Meat' in the beginning if not already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
// Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}
// Remove 'Honey' if allergic
if (shoppingCart.includes('Honey')) {
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}
// Modify 'Tea' to 'Green Tea'
if (shoppingCart.includes('Tea')) {
  shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
}
console.log(shoppingCart);
//Checking and adding country in the countries array
const countries = require('./countries');
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}
console.log(countries);
//Checking and adding tech in the webTechs array
const webTechs = require('./web_techs');
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}
//Concatenating two arrays
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);