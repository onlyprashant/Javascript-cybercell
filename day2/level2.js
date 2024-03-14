console.log("There is no exercise better for the heart than reaching down and lifting people up.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// Check if 'on' is found in both python and jargon
console.log('python'.includes('on') && "jargon".includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('I hope this course is not full of jargon.'.includes('jargon'));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 51) + 50);

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256));

// Access the 'JavaScript' string characters using a random number.
var str = 'JavaScript';
var randomIndex = Math.floor(Math.random() * str.length);
console.log(str.charAt(randomIndex));

// Use console.log() and escape characters to print the pattern.
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// Use substr to slice out the phrase because because because in the following sentence: 'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.substr(31, 23));