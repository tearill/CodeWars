function generateHashtag (str) {
    if(str.trim() === '') return false;
    let res = str.replace(/\s+(.)/g, function(res) {
        let len = res.length - 1;
        return res.charAt(len).toUpperCase();
    });
    let first = res.charAt(0).toUpperCase();
    res = res.slice(1);
    return res.length + 2 > 140 ? false : '#' + first + res;
}

console.log(generateHashtag("Hello there thanks for trying my Kata"));
console.log(generateHashtag("   Hello     World   "));
console.log(generateHashtag("                                  "));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
console.log(generateHashtag("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))