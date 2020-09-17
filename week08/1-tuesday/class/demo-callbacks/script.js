console.log('Begin Page')

var myFunc = () => {
    console.log('Callback Executed')
}

function mainLoop(callback){
    setTimeout(callback, 0)
    console.log('End Main Loop')
}

mainLoop(myFunc)


for(var i=0; i<100; i++){
    console.log("I is equal to: " + i)
}

console.log('End Page')