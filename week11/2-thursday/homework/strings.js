class Strings {
    // Reverses a string.
    reverse(toReverse) {

        let output = toReverse.split("");
        output = output.reverse();
        return output.join("");

        //for (let i = toReverse.length() - 1; i >= 0; --i) {
        //    let revString += toReverse.charAt(i);
        //}

        //return revString;
    }

    // Detectes if a string is a pallindrome
    detectPallindrome(toCheck) {
    //    let stringLength = toCheck.length;

    //    for (let i = 0; i < stringLength/2; i++) {
    //        if (toCheck[i] !== toCheck[stringLength - 1 - i]) {
    //            return false;
    //        }
    //    }

    //    return true;

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