//WRITE A FUNCTION THAT RETURNS TRUE IF TWO STRINGS ARE ANAGRAMS OF EACHOTHER

function isAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false
    }

    let sortWord1 = word1.split('').sort().join('');
    let sortWord2 = word2.split('').sort().join('');

    return sortWord1 === sortWord2;
}

isAnagram(sorry, happy);