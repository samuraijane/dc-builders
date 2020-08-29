$(()=> {
    let urls = [
        'https://dog.ceo/api/breed/beagle/images/random',
        'https://dog.ceo/api/breed/chow/images/random',
        'https://dog.ceo/api/breed/akita/images/random',
        'https://dog.ceo/api/breed/dingo/images/random',
        'https://dog.ceo/api/breed/eskimo/images/random'
    ];
    /* Answer 1 */
    // fetch(urls[0])
    //     .then(response => {
    //         console.log('#1 data was fetched');
    //         fetch(urls[1]).then(response => {
    //             console.log('#2 data was fetched');
    //             fetch(urls[2]).then(response => {
    //                 console.log('#3 data was fetched');
    //                 fetch(urls[3]).then(response => {
    //                     console.log('#4 data was fetched');
    //                     fetch(urls[4]).then(response => {
    //                         console.log('#5 data was fetched');
    //                     })
    //                 })
    //             })
    //         })
    //     })
    /* Answer 1 (async) */
    // async function getUrls() {
    //     let data = await fetch(urls[0]);
    //     console.log('#1 data was fetched');
    //     data = await fetch(urls[1])
    //     console.log('#2 data was fetched');
    //     data = await fetch(urls[2])
    //     console.log('#3 data was fetched');
    //     data = await fetch(urls[3])
    //     console.log('#4 data was fetched');
    //     data = await fetch(urls[4])
    //     console.log('#5 data was fetched');
    // }
    // getUrls()

    /* Answer 2 */
    let promiseArray = urls.map((url, idx) => {
        return fetch(url).then(() => console.log('Data #: ' + idx));
    });
    Promise.all(promiseArray).then(() => {
        console.log("All the data was fetched!");
    });

    /* Answer 3 */
    let addNumbers = (x, y) => {
        return new Promise((resolve, reject) => {
            if(typeof x !== 'number' || typeof y !== 'number'){
                reject("Either X or Y is not a number")
            }
            resolve(x+y);
        })
    }
    addNumbers(2, 3)
        .then(function(answer) {
            console.log(answer);
        })
        .catch(function(error) {
            console.log(error);
        })
    addNumbers('Boss', 'Hoss')
        .then(function(answer) {
            console.log(answer);
        })
        .catch(function(error) {
            console.log(error);
        })


});

