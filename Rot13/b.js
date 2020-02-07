const rot13 = str => {
    return str.replace(/[a-z]/gi, letter => { 
        return String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() < 'n' ? 13 : -13))
    });
}

console.log(rot13("test"));
console.log(rot13("Test"));