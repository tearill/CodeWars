var maxSequence = function (arr) {
    var max = 0;
    var sum = 0;
    for(let num of arr) {
        if(sum < 0) { // 加了跟没加一样
            sum = 0;
        }
        sum += num;
        max = Math.max(max, sum);
    }
    return max;
} 

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));