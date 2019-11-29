// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.
// 正则表达式版本
function getCount(str) {
    // enter your majic here
    return (str.match(/[aeiou]/ig)||[]).length;
}
console.log(getCount("abracadabra"));