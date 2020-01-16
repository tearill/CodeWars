var toCamelCase = function(str) {
    str = str.replace(/\-/g, '_').split('');
    for(let i = 0, len = str.length; i < len; i++) {
        if(str[i] == '_') {
            str[i+1] = str[i+1].toUpperCase();
            str.splice(i, 1);
        }
    }
    return str.join('');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("A-B-C"));