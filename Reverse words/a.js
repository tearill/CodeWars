function reverseWords(str) {
    // Go for it
    return str.split(/(\s+)/).map((val) => {
        return val.split('').reverse().join('');
    }).join('');
}

console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));
console.log(reverseWords('triple   spaces'));