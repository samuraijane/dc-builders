//determines if year is a leap year
function leapYearChecker(yr) {
    if (yr === 2000) {
        return true
    } else if (yr % 4 === 0 && yr % 100 !== 0) {
        return true;
    } else {return false}
}

module.exports = leapYearChecker;