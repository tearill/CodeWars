function spinWords(str){
    //TODO Have fun :)
    var arr = str.split(' ');
    for (let i = 0, len = arr.length; i < len; i++) {
        if(arr[i].length >= 5) {
            arr[i] = arr[i].split('').reverse().join('');
        }
    }
    return arr.join(' ');
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));