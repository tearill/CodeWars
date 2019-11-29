// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.
// 暴力版本
function getCount(str) {
    var vowelsCount = 0;
    for(var i = 0, len = str.length; i < len; i++) {
        var current = str[i];
        // 判断元音字母 暴力判断
        if(current === 'a' || current === 'e' || current === 'i' || current === 'o' || current === 'u') {
            vowelsCount++;
        }
    }
    // enter your majic here
    
    return vowelsCount;
}
console.log(getCount("abracadabra"));