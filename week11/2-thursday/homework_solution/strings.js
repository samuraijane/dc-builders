class Strings {
    // Reverses a string.
    reverse(toReverse) {
        let output = toReverse.split("")
        output = output.reverse()
        return output.join("")
    }

    // Detectes if a string is a pallindrome
    detectPallindrome(toCheck) {
        return toCheck === this.reverse(toCheck)
    }

    // Shifts every letter forward by one. Z goes
    // to A (wraps around)
    shift(toShift) {
        let chars = toShift.split("")
        chars = chars.map( (char) => { 
            let code = char.charCodeAt(0)
            if (code >= 65 && code <= 90) {
                code = (code - 64) % 26 + 65
                return String.fromCharCode(code)
            } 
            else if (code >= 97 && code <= 122) {
                code = (code - 96) % 26 + 97
                return String.fromCharCode(code)
            }
            else {
                return char
            }
        } )

        return chars.join("")
    }

    // Checks to see if the target string is a number
    isNumber(toCheck) {
        return typeof toCheck === "Number"
    }
}

module.exports = Strings