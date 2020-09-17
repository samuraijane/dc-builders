let sum = 0

for (let idx = 2; idx < process.argv.length; idx ++) {
    sum += parseFloat(process.argv[idx])
}

console.log(sum)