function findSum(numbers){
    let sum = 0;
    for(let i = 2; i < numbers.length; i++){ 
        sum += Number(numbers[i]);
    }
    return sum;
}
console.log(findSum(process.argv));