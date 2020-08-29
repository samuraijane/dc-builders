var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];

//one after another

// async function get () {
//    let r1 = await fetch(urls[0])
//    let r2 = await fetch('https://dog.ceo/api/breed/chow/images/random')
//    let r3 = await fetch('https://dog.ceo/api/breed/akita/images/random')
//    let r4 = await fetch('https://dog.ceo/api/breed/dingo/images/random')
//    let r5 = await fetch('https://dog.ceo/api/breed/eskimo/images/random')
//    console.log('data 5 was fetched!')
   
// };

// fetch(urls[0])
// .then(response => {
//     console.log('data 1 was fetched...')
//     fetch(urls[1]).then( response => {
//         console.log('data 1 was fetched...')    
//     });
// })

//.Promise.all()
//waits to all are done

let promiseArray = urls.map((url, indx) => {
    return fetch(url).then( () => console.log(`Data #${indx}`))
});

Promise.all(promiseArray).then(() => console.log ('All done'));


//Add numbers

   let addNumbers = (x , y) => {
        return new Promise((resolve, reject) => {
            if(typeof x !== 'number' || typeof y !== 'number') {
                reject('X or Y is not a number')
            };
            resolve(x+y);
       });
   }

   addNumbers(1, 2)
   .then(function (answer) {
      console.log(answer);
   })
   .catch(function (error) {
      console.log(error);
   });

   addNumbers(1, 'dog')
   .then(function (answer) {
      console.log(answer);
   })
   .catch(function (error) {
      console.log(error);
   });