async function getDogs(){
    let response = await fetch('https://dog.ceo/api/breeds/list')
    let data = await response.json()

    console.log(data)
}

// Non-functioning example of waiting for two promises. No nesting required!
// async function myAsyncFunc(){
//     let breed = await fetch('https://dog.ceo/api/breeds/list');
//     let breeds = await fetch(`https://dog.ceo/api/breeds/${breed}`);

// }

// // How do I create my own promise, like using SetTimeout
// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Data collection here...")
//         // assume accessing the tube of the internet  (like fetch) 
//         resolve("Hey, two seconds is over")
//     }, 2000)
// }).then(data => console.log(data))

$(()=> {
    console.log('HTML Loaded')

    getDogs()
    console.log("I'm not waiting for ^ fetch!")
        
})