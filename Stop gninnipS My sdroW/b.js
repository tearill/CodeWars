function spinWords(str) {
    return str.split(' ').map(item => {
        return item.length > 4 ? item.split('').reverse().join('') : item;
    }).join(' ');
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));