const countriesCopy = [...countries];
console.log('Countries copy:', countriesCopy);

const sortedCountries = [...countries].sort();
console.log('Sorted countries:', sortedCountries);

const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();
console.log('Sorted webTechs:', sortedWebTechs);
console.log('Sorted MERN stack:', sortedMernStack);

const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
console.log('Countries with land:', countriesWithLand);

const countryWithLongestName = countries.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
console.log('Country with longest name:', countryWithLongestName);

const countriesWithLandDuplicate = countries.filter(country => country.toLowerCase().includes('land'));
console.log('Countries with land:', countriesWithLandDuplicate);

const countriesWithFourChars = countries.filter(country => country.length === 4);
console.log('Countries with four characters:', countriesWithFourChars);

const countriesWithTwoOrMoreWords = countries.filter(country => country.includes(' '));
console.log('Countries with two or more words:', countriesWithTwoOrMoreWords);

const reversedAndCapitalizedCountries = countries.map(country => country.toUpperCase()).reverse();
console.log('Reversed and capitalized countries:', reversedAndCapitalizedCountries);
