// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. 
// Return True if it is, False if not. 
// Ignore numbers and punctuation.

function isPangram(string) { 
    // 过滤掉非字母符号
    // 过滤掉重复的字母
    // const set = new Set(string.toLowerCase().match(/[a-z]/g));
    // console.log(set.size);
    
    // 如果最后返回元素的个数恰好是26个，就说明字符串中包含全部26个英文字母
    // return set.size == 26 ? true : false;
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram.'));
console.log(isPangram('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));