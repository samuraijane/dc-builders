console.log(process.argv)

var sum = 0;

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i])
    sum = process.argv[i]
}
console.log(sum);