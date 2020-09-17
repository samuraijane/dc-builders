$(() => {
    console.log("Ready");
    
    let urls = [
        'https://dog.ceo/api/breed/beagle/images/random',
        'https://dog.ceo/api/breed/chow/images/random',
        'https://dog.ceo/api/breed/akita/images/random',
        'https://dog.ceo/api/breed/dingo/images/random',
        'https://dog.ceo/api/breed/eskimo/images/random'
    ];

// Question 1

    fetch(urls[0])
        .then(response => {
            console.log("#1 data was fetched!")
            fetch(urls[1]).then(
                response => {
                    console.log("#2 data was fetched!")
                    fetch(urls[2]).then(
                        response => {
                            console.log("#3 data was fetched!")
                            fetch(urls[3]).then(
                                response => {
                                    console.log("#4 data was fetched!")
                                    fetch(urls[4]).then(
                                        response => {
                                            console.log("#5 data was fetched!")
                                        }
                                    )
                                }
                            )
                        }
                    )
                }
            )
        })


// Question 2

let promiseArray = urls.map((url, idx) => {
    fetch(url).then(() => console.log("Data #: " + idx))
})

Promise.all(promiseArray).then(() => console.log("All done"))


// Question 3

let addNumbers = (x, y) => {
    return new Promise((resolve, reject) => {
        if(typeof x !== 'number' || typeof y !== 'number') {
            reject("Not a number.")
        }
        resolve(x + y)
    })
}

addNumbers (1, 2)
    .then(function (answer) {
        console.log(answer);
    })
    .catch(function (error) {
        console.error(error);
    });

    
});
    