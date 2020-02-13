function countLettersAndDigits(input) {
    if (!input || input.length === 0) return 0;
    return input.match(/[0-9A-Za-z]/g).length;
}

console.log(countLettersAndDigits("hel2!lo"));
console.log(countLettersAndDigits("wicked .. !"));
console.log(countLettersAndDigits("!?..A"));


// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1