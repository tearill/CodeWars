function take(arr, n) {
    // Your code here
    // return arr.join('').slice(0, n).split('').map(item => {
    //     return parseInt(item);
    // });
    return arr.splice(0, n);
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3))