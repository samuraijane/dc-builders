const readline = require('readline')
const Strings = require('./strings')

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout, 
    prompt: 'PRJ1>'
})

let strings =new Strings()

interface.prompt()
interface.on('line', (line) => {

    if (line.startsWith('reverse')) {
        argument = line.slice(7).trim()
        console.log(strings.reverse(argument))
    } else if (line.startsWith('is-pallindrome')) {
        argument = line.slice(14).trim()
        console.log(strings.detectPallindrome(argument))
    } else if (line.startsWith('shift')) {
        argument = line.slice(5).trim()
        console.log(strings.shift(argument))
    } else if (line.startsWith('is-number')) {
        argument = line.slice(9).trim()
        console.log(strings.isNumber(argument))
    } else {
        console.log("Unknown command. Supported options are: ")
        console.log("[reverse, is-pallindrome, shift, is-number]")
    }

    interface.prompt()
}).on('close', () => {
    console.log("Bye!")
    process.exit(0)
})