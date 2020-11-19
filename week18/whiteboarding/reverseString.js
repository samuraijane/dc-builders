// function that reverses a string. can't use reverse method.

function reverseStr(str) {
    let strSplit = str.split('');
    let reverseStrArr = [];
    for (let i=0; i<strSplit.length; i++) {
        reverseStrArr.unshift(strSplit[i]);
    }

    return reverseStrArr.join('');
}
console.log(reverseStr('happy'));