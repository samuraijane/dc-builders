# Promise Exercises

## Part 1 - .then() chaining

Given an array of urls:

var urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
];
Use fetch.get() and a chain of .then() calls to fetch these URLs one by one. After each .get() is done, console log "data was fetched!". You should see 5 separate log statements staggered in time.

## Part 2 - Promise.all()

Use Promise.all() to retreive all of the URLs above in one fell swoop. After it's done, console log "all the data was fetched!"

## Part 3 - Resolve Reject

Write a function called addNumbers(x, y) that returns a new Promise() that adds two numbers and resolves the answer. However, if the two inputs provided are not both numbers reject the promise. The API should work like the following:

```javascript
addNumbers(x, y)
   .then(function (answer) {
      console.log(answer);
   })
   .catch(function (error) {
      console.log(error);
   });
``` 

## Part 4 - Promisify (challenge question!)

The function below uses callbacks to report the result of dropping buttered toast on the floor. Copy this function in your code! The function you write will end up calling the below function:

```javascript
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
```

To react to the dropping of toast, we would have to provide callbacks for each possibility: dropping butter side up, or butter side down.

```javascript
dropButteredToastOnFloor(()=>{
   alert('Whew, that was close!');
}, ()=>{
   alert('Well shucks, there goes my toast...');
});
```

YOUR TASK- Write a function called dropToastPromisified(), make it return a new Promise(), and use the dropButteredToastOnFloor() function to call either resolve() or reject(). If done correctly, you should be able to run:

```javascript
dropToastPromisified()
  .then(()=>{
    alert('Whew, that was close!');
  }).catch(()=>{
    alert('Well shucks, there goes my toast...');
  });
```