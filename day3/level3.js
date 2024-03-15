// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//  1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let date = new Date();

let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');

let hour = String(date.getHours()).padStart(2, '0');
let minute = String(date.getMinutes()).padStart(2, '0');

let humanReadableTime = `${year}-${month}-${day} ${hour}:${minute}`;
console.log("YYYY-MM-DD HH:mm:", humanReadableTime);