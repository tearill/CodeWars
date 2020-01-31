function toWeirdCase(string) {
    return string.replace(/\w{1,2}/g, (res) => {
        return res.length === 1 ? res[0].toUpperCase() : res[0].toUpperCase() + res[1].toLowerCase();
    })
}

console.log(toWeirdCase("String"));//=> returns "StRiNg"
console.log(toWeirdCase("Weird string case"));//=> returns "WeIrD StRiNg CaSe"
console.log(toWeirdCase('This is a Test'));// =>"ThIs Is A TeSt"