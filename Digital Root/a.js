function digital_root(n) {
    // ...
    
    var sum = function(n) {
        n = n.toString().split('');
        var s = 0;
        for (let i = 0, len = n.length; i < len; i++) {
            s += parseInt(n[i]);
        }
        return s;
    }

    var res = sum(n);
    while(res > 9) {
        res = sum(res);
    }
    return res;
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));