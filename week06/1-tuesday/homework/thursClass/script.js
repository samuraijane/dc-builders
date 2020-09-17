let form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e);
    const data = new FormData(form);
    console.log(data);
    console.log(stringifyFormData(data));
});

function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 4);
}
 
// PROMISE WORK -- NOT RELATED TO FORM STUFF ABOVE
function getJob() {
	const promise = new Promise((res, rej) => {
    setTimeout(() => {
    	res();
      console.log('I got a job!');
    }, 600);
  });
  return promise;
}
function submitResume() {
	return new Promise((res, rej) => {
    setTimeout(() => {
    	res();
      console.log('Here is my resume.');
    }, 1200);
  });
  return promise;
}
submitResume().then(() => getJob());

function getBonus(num) {
	const promise = new Promise((res, rej) => {
    setTimeout(() => {
      const bonus = num * .10;
      res(bonus + num);
      console.log('second');
    }, 100);
  });
  return promise;
}
function submitBasePay(basePay) {
	return new Promise((res, rej) => {
    setTimeout(() => {
    	res(basePay);
      console.log('first');
    }, 1200);
  });
  return promise;
}
submitBasePay(100)
	.then(data => getBonus(data))
  .then(answer => console.log(answer));




