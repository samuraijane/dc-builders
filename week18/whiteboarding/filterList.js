// FUNCTION THAT TAKES A LIST AND REMOVES ANY ITEMS IN THE LIST THAT ARE STRINGS. don't use .replace

//can't use splice or mutate the original array because changes indices
function noStrings(list) {

    let newList = [];
    for (let i=0; i<list.length; i++) {
        if (typeof list[i] !== "string") {
            newList.push(list[i]);
        }
    }

    return newList
}

console.log(noStrings(["hello", 1, 2, 300]));
console.log(noStrings([1, "hello", 2, "world"]));
console.log(noStrings([true, false, 1, "hello", "world"]));
console.log(noStrings([true, false, 1, "hello", "world", 33]));
