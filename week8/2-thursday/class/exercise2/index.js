async function get () {
   let r1 = await fetch('https://dog.ceo/api/breed/beagle/images/random')
   let r2 = await fetch('https://dog.ceo/api/breed/chow/images/random')
   let r3 = await fetch('https://dog.ceo/api/breed/akita/images/random')
   let r4 = await fetch('https://dog.ceo/api/breed/dingo/images/random')
   let r5 = await fetch('https://dog.ceo/api/breed/eskimo/images/random')
   let data = 'data was fetched!'
   console.log(data);
};