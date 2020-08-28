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

// PART 2: Promise.all()

  
const retrieveDoggosFromAPI = (doggoUrls) => {
    const fetchArray = doggoUrls.map(url => 
        fetch(url)
        .then(response => response.json())
    );

    return Promise.all(fetchArray);
  };


console.log(`The data we got from the server was ${retrieveDoggosFromAPI(urls)}`);

// PART 3: Resolve Reject

const addNumbers = ((x,y) => {
    return new Promise((res, rej) => {
        if (isNaN(x) || isNaN(y)) {
            rej();
        }
        else {
            res();  
        }
    })
    .then(() => {
        let sum = x + y;
        console.log(sum);
    })
    .catch(() => {
        console.error(`Error, one or both of the parameters is not a number`);
    })
})

addNumbers(1, 2);
addNumbers("t", 3);