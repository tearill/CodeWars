# Maximum subarray sum
- codewars👉https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

- solution 1：
  重点是字串和
  1. 遍历一遍数组，max = sum = 0
  2. 计算元素和，如果加完之后的元素和 sum 小于0，加了和没加一样，直接把 sum 置为0
  3. 取 sum 与 max 的最大值