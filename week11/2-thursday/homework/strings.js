class Strings {
    // Reverses a string.
    reverse(toReverse) {
        let output = toReverse.split("") //splits on every characterand puts to array
        output = output.reverse() //flips order of array
        return output.join("") //puts back together w/nothing inbetween
    }

    // Detectes if a string is a pallindrome
    detectPallindrome(toCheck) {
        return toCheck === this.reverse(toCheck) //runs reverse funtion in Strings class
    }

    // Shifts every letter forward by one. Z goes
    // to A (wraps around) askii codes 65-90
    shift(toShift) {

    }

    // Checks to see if the target string is a number
    isNumber(toCheck) {
        return typeof toCheck === "Number"   

    }
}

module.exports = Strings