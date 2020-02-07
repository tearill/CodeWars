function rot13(message) {
    // console.log(message.split() instanceof Array)
    var list = []
    for (let i = 0; i < message.length; i++) {
        let curr = message[i];
        // console.log(code);
        if ((curr >= 'a' && curr <= 'z') || (curr >= 'A' && curr <= 'Z')) {
            let code = message.charCodeAt(i)
            // console.log(code)
            if ((curr >= 'a' && curr < 'n') || (curr >= 'A' && curr < 'N')) {
                list += String.fromCharCode(code + 13)
            } else {
                list += String.fromCharCode(code - 13)
            }
        } else {
            list += curr
        }
    }
    return list
}

console.log(rot13("test"));
console.log(rot13("Test"));