function reverseWords(str) {
    // Go for it
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));
console.log(reverseWords('triple   spaces'));