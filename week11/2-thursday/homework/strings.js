class Strings {
    // Reverses a string.
    reverse(toReverse) {
        let split = toReverse.split("");
        split = split.reverse();
        return split.join(""); 
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
        return typeof toCheck === "Number";
    }
}

module.exports = Strings