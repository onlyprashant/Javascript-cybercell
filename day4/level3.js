const month = prompt("Enter a month:").toLowerCase();

switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(month + " has 31 days.");
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(month + " has 30 days.");
        break;
    case 'february':
        console.log(month + " has 28 or 29 days.");
        break;
    default:
        console.log("Invalid month entered.");
}

const year = parseInt(prompt("Enter the year:"));

let days;

switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        days = 31;
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        days = 30;
        break;
    case 'february':
        // Check for leap year
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            days = 29;
        } else {
            days = 28;
        }
        break;
    default:
        console.log("Invalid month entered.");
}

if (days) {
    console.log(month + " has " + days + " days.");
}