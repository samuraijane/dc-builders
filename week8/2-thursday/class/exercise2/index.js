const fetch = require('node-fetch');
const { resolve } = require('path');

// part 1 .then chaining
let urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];

  const retrieveDoggoUrl = ((doggoUrls) => {
    for(let i=0; i<doggoUrls.length; i++) {
        fetch(doggoUrls[i])
        .then(response => response.json())
        .then(console.log(`${doggoUrls[i]} has been fetched`))
    }
  })

retrieveDoggoUrl(urls);

// could use async await to make more simple

// async function getUrls() {
//  let data = await fetch(urls[0]);
//  console.log("#1 data was fetched");
//  data = await fetch(urls[1]);
//  console.log("#2 data was fetched"); 
//  ...  
// }
//  getUrls();

// PART 2: Promise.all() --> when a bunch of Promises return together, wait until all are resolved or at least one is rejected

  
const retrieveDoggosFromAPI = (doggoUrls) => {
    const fetchArray = doggoUrls.map((url, idx) => {
        fetch(url)
        .then(response => response.json())
        .then(() => console.log(`Data #: ${idx}`))
    });

    return Promise.all(fetchArray);
  };


retrieveDoggosFromAPI(urls);

// PART 3: Resolve Reject

let addNumbers = ((x,y) => {
    return new Promise((res, rej) => {
        if (isNaN(x) || isNaN(y)) {
            rej("One or both of the parameters is not a number");
        }
        else {
            res(x+y);  
        }
    })
})

//test cases

addNumbers(1, 2)
    .then((answer) => {
        console.log(answer);
    })
    .catch((error) => {
        console.error(error);
    })

addNumbers("t", 3)
    .then((answer) => {
        console.log(answer);
    })
    .catch((error) => {
        console.error(error);
    })