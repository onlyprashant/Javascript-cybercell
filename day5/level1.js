// 1. Declare an empty array
let emptyArray = [];

// 2. Declare an array with more than 5 elements
let numbersArray = [1, 2, 3, 4, 5, 6, 7];

// 3. Find the length of the array
console.log(numbersArray.length); // Output: 7

// 4. Get the first, middle, and last items of the array
let firstItem = numbersArray[0];
let middleItem = numbersArray[Math.floor(numbersArray.length / 2)];
let lastItem = numbersArray[numbersArray.length - 1];
console.log(firstItem, middleItem, lastItem); // Output: 1 4 7

// 5. Declare an array with different data types
let mixedDataTypes = ['string', 5, true, null, {key: 'value'}];
console.log(mixedDataTypes.length); // Output: 5

// 6. Declare and initialize array itCompanies
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length); // Output: 7

// 9. Print the first, middle, and last companies
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1]);

// 10. Print out each company
itCompanies.forEach(company => console.log(company));

// 11. Change each company name to uppercase and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()));

// 12. Print the array as a sentence
console.log(itCompanies.join(', ') + ' are big IT companies.');

// 13. Check if a certain company exists in the array
let companyToFind = 'Google';
if (itCompanies.includes(companyToFind)) {
    console.log(companyToFind + ' exists in the array.');
} else {
    console.log('Company is not found.');
}

// 14. Filter out companies with more than one 'o'
let filteredCompanies = [];
for (let company of itCompanies) {
    if ((company.match(/o/g) || []).length > 1) {
        filteredCompanies.push(company);
    }
}
console.log(filteredCompanies);
// 15. Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

// 17. Slice out the first 3 companies from the array
let firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

// 18. Slice out the last 3 companies from the array
let lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);

// 19. Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);
let middleCompanies = [];
if (itCompanies.length % 2 === 0) {
    middleCompanies = itCompanies.slice(middleIndex - 1, middleIndex + 1);
} else {
    middleCompanies.push(itCompanies[middleIndex]);
}
console.log(middleCompanies);

// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
if (itCompanies.length % 2 === 0) {
    itCompanies.splice(middleIndex - 1, 2);
} else {
    itCompanies.splice(middleIndex, 1);
}
console.log(itCompanies);

// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies
itCompanies = [];
console.log(itCompanies);