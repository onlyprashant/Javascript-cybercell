const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);
console.log('Sorted ages:', ages);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log('Min age:', minAge);
console.log('Max age:', maxAge);

// Find the median age
let medianAge;
if (ages.length % 2 === 0) {
  medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
}
console.log('Median age:', medianAge);

// Find the average age
const sumAges = ages.reduce((acc, curr) => acc + curr, 0);
const averageAge = sumAges / ages.length;
console.log('Average age:', averageAge);

// Find the range of ages
const range = maxAge - minAge;
console.log('Range of ages:', range);

// Compare (min - average) and (max - average)
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);
console.log('Absolute difference between min and average:', diffMinAverage);
console.log('Absolute difference between max and average:', diffMaxAverage);

const countries = require('./countries');
const firstTenCountries = countries.slice(0, 10);
console.log('First ten countries:', firstTenCountries);

const middleIndex = Math.floor(countries.length / 2);
const middleCountries = countries.length % 2 === 0 ? [countries[middleIndex - 1], countries[middleIndex]] : [countries[middleIndex]];
console.log('Middle country(ies):', middleCountries);

const halfIndex = Math.ceil(countries.length / 2);
const firstHalfCountries = countries.slice(0, halfIndex);
const secondHalfCountries = countries.slice(halfIndex);
console.log('First half countries:', firstHalfCountries);
console.log('Second half countries:', secondHalfCountries);