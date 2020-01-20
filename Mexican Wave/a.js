function wave(str) {
    var res = [];
    str.split('').forEach((val, index) => {
        res.push(str.slice(0, index) + val.toUpperCase() +str.slice(index + 1));
    });
    return res;
}

console.log(wave('hello'));
