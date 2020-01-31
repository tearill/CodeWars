function toWeirdCase(string) {
    let res = string.split(' ').map(val => {
        return val.split('').map((val, index) => {
            return index % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        }).join('');
    }).join(' ');
    return res;
}

console.log(toWeirdCase("String"));//=> returns "StRiNg"
console.log(toWeirdCase("Weird string case"));//=> returns "WeIrD StRiNg CaSe"
console.log(toWeirdCase('This is a test'));// =>"ThIs Is A TeSt"