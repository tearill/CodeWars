function generateHashtag (str) {
    if(str.trim() === '') return false;
    let res = '#' + str.split(' ').map(val => {
        return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    }).join('');
    return res.length > 140 ? false : res;
}

console.log(generateHashtag("Hello tHere thanks for trying my Kata"));
console.log(generateHashtag("   Hello     World   "));
console.log(generateHashtag("                                  "));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
console.log(generateHashtag("aaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))