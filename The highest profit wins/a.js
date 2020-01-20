function minMax(arr){
    var len = arr.length;
    if(len === 1) {
        return arr.concat(arr);
    } else {
        arr = arr.sort((a, b) => {
            return a-b;
        })
        return [arr[0], arr[len-1]];
    }
}

console.log(minMax([1,2,3,4,5]));
console.log(minMax([2334454,5]));
console.log(minMax([1]));
console.log(minMax([0.7537135662706942, 0.7537135662706942]));