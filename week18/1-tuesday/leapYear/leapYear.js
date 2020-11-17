function leapYear(theYear) {
    if (theYear % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = leapYear;
