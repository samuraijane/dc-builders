class Strings {
    // Reverses a string.
    reverse(toReverse) {
        let strSplit = toReverse.split("");
        let reverseArr = strSplit.reverse();
        let arrJoin = reverseArr.join("");
        return arrJoin;
    }

    // Detectes if a string is a pallindrome
    detectPallindrome(toCheck) {
        return toCheck === this.reverse(toCheck);  //reverse function that belongs to the class (need this keyword)
    }

    // Shifts every letter forward by one. Z goes
    // to A (wraps around)
    shift(toShift) {
        let chars = toShift.split("")
        // like Ceasar Cipher; use charcode stuff
    }

    // Checks to see if the target string is a number
    isNumber(toCheck) {
        return typeof toCheck === "Number"
    }
}

module.exports = Strings