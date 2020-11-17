module.exports = isLeapYearCheck
//Function determine if year is a leap year

function isLeapYearCheck(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0 ) return false;
    return year % 4 === 0; 
}

console.log(isLeapYearCheck(2020));



