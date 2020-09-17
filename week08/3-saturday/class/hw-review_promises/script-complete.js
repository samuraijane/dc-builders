// *****************
// Promise Exercises Review
// ******************


let urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
];


// *****************
// Question 1
// ******************

console.log("*****QUESTION 1********")

fetch(urls[0])
    .then(res => {
        console.log('#1 data was fetched!')
        fetch(urls[1])
            .then(res => {
                console.log('#2 data was fetched!')
                fetch(urls[2])
                    .then(res => {
                        console.log('#3 data was fetched!')
                        fetch(urls[3])
                            .then(res => {
                                console.log('#4 data was fetched!')
                                fetch(urls[4])
                                    .then(res => {
                                        console.log('#5 data was fetched!')
                                    })                      
                            })   
                    })       
            })                  
    })


// *****************
// Question 1 - Alternate Answer w/ Asycn Await
// ******************

console.log("*****QUESTION 1, ALT Answer********")

async function getUrls() {
    let data1 = await fetch(urls[0])
    console.log("#1 data was fetched")
    data = await fetch(urls[1])
    console.log("#2 data was fetched")
    data = await fetch(urls[2])
    console.log("#3 data was fetched")
    data = await fetch(urls[3])
    console.log("#4 data was fetched")
    data = await fetch(urls[4])
    console.log("#5 data was fetched")
}

getUrls()

// *****************
// Question 2
// ******************

console.log("*****QUESTION 2********")

let urlPromises = urls.map((url, idx) => {
    return fetch(url).then(data => console.log('URL Data Returnred: ' + idx ))
})

Promise.all(urlPromises).then(data => console.log("all the data was fetched!"))

// *****************
// Question 3
// ******************

console.log("*****QUESTION 3********")

// Create Me
let addNumbers = (x, y) => {
    return new Promise((resolve, reject) => {
        if( !x || !y || typeof x !== `number` || typeof y !== `number`){
            reject('X or Y is not valid')
        }
        resolve(x+y)
    })
}

// From the problem statement
addNumbers(1, 2)
   .then(function (answer) {
      console.log(answer);
   })
   .catch(function (error) {
      console.error(error);
   });


addNumbers("Chad","Farthouse")
    .then(function (answer) {
        console.log(answer);
    })
    .catch(function (error) {
        console.error(error);
    });

// *****************
// Question 4
// ******************

console.log("*****QUESTION 4********")

// From the problem statement
let dropButteredToastOnFloor = (success, failure) => {
    console.log("oh no, I dropped my toast!");
    setTimeout( function(){
       var drop = Math.random();
       if (drop < 0.5) {
          console.log("Landed butter-side up!")
          success();
       } else {
          console.log("Landed butter-side down...")
          failure();
       }
    }, 2000);
 }
 
// Create me!
let dropToastPromisified = () => {
    return new Promise((resolve, reject) => {
        dropButteredToastOnFloor(resolve, reject)
    })
}

// From the problem statement
 dropToastPromisified()
  .then(()=>{
    alert('Whew, that was close!');
  }).catch(()=>{
    alert('Well shucks, there goes my toast...');
  });