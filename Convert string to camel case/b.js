function toCamelCase(str) {
    return str.replace(/[-_](.)/g, function(res) {
        return res.charAt(1).toUpperCase();
    })
}

console.log(toCamelCase("thestealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("A-B-C"));