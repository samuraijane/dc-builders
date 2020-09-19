class Strings {
    // Reverses a string.
    reverse(toReverse) {
        return toReverse.split("").reverse().join("");
    }

    // Detectes if a string is a pallindrome
    detectPallindrome(toCheck) {
        return toCheck === this.reverse(toCheck);
    }

    // Shifts every letter forward by one. Z goes
    // to A (wraps around)
    shift(toShift) {
    }

    // Checks to see if the target string is a number
    isNumber(toCheck) {
        return Number.isInteger(toCheck);
    }
}

module.exports = Strings