const score = parseInt(prompt("Enter your score:"));

if (score >= 80 && score <= 100) {
    console.log("Your grade is A");
} else if (score >= 70 && score < 80) {
    console.log("Your grade is B");
} else if (score >= 60 && score < 70) {
    console.log("Your grade is C");
} else if (score >= 50 && score < 60) {
    console.log("Your grade is D");
} else if (score >= 0 && score < 50) {
    console.log("Your grade is F");
} else {
    console.log("Invalid score entered");
}
const month = prompt("Enter the name of the month:").toLowerCase();

switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log("The season is Autumn.");
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log("The season is Winter.");
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log("The season is Spring.");
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log("The season is Summer.");
        break;
    default:
        console.log("Invalid month entered.");
}
const day = prompt("What is the day today?").toLowerCase();

if (day === 'saturday' || day === 'sunday') {
    console.log(day + " is a weekend.");
} else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
    console.log(day + " is a working day.");
} else {
    console.log("Invalid day entered.");
}