
// ***********
// CONST 
// ***********

// You can't ever change this. which is good. It will throw an error.
const pi = 3.142


const bensCar={
    make: "F250",
    model: "Chevy"
}

// Doesn't matter if it's constant, you can mutate
bensCar.model = "Ford"

// // WON'T WORK: Can't reassign a constant reference.
// bensCar = {
//     make: "F250",
//     model: "Ford"
// }


const myStr = "Rudy"
// // WON'T WORK: Strings are immutable
// myStr += " bites"


const myArr = [1, 2, 3, 4]
// This is fine, you are just mutating
for(let i=0; i<myArr.length; i++){
    myArr[i]+=1
}



// ***********
// VAR vs LET 
// ***********

// This is fine, because "i" is FUNCTION SCOPED
function varFunc(){
    for(var i=0; i<5; i++){
       console.log("i equals: " + i)
    }

    return i
}

var result1 = varFunc();
console.log(result1)

// // WON'T WORK: "i" is block scoped; it dies at the end of the for loop
// function letFunc(){
//     let myArr = []

//     for(let i=0; i<1000000; i++){
//        myArr.push(i)
//        console.log("i equals: " + i)
//     }

//     return i
// }

// var result2 = letFunc();
// console.log(result2)


// ***********
// STRING LITERALS
// ***********

// The 
let test = "Inner text"
let myHTML = "<div>" + "<div>" + text + "</div>" + "</div>" // Imagine 5 more layers of DIVs here :(

// Templates make it better! This is more natural and has formatting.
myHTML = `
<div>
    <div>
    ${test}
    </div>
</div>
`


