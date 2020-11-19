
const isLeapYear = require('./leapYear');

const daysInAMonth = (month, year) => {
    // LAZY WAY
    const monthsToDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month===2 && isLeapYear(year)){
        return 29
    }
    return monthsToDays[month-1] //array is zero indexed

    // FANCY WAY
    // https://www.w3resource.com/javascript-exercises/javascript-date-exercise-3.php
    //return new Date(year, month, 0).getDate();
    
};

module.exports = daysInAMonth;