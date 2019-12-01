function printerError(s) {
    // your code
    return (s.match(/[^a-m]/ig)||[]).length + '/' + s.length;
}
console.log(printerError("aaabbbbhaijjjm"));