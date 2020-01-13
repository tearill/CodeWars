# Sum of Digits / Digital Root
- codewars👉https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript\

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works:
digital_root(16)
=> 1 + 6
=> 7
digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6
digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

- solution 1:
  1. 将数值转换成字符串再转换成数组
  2. 把每一项的和求出来
     如果sum > 9 递归继续转数组分解求每项和
     如果sum <= 9 返回sum

- solution 2:
  运用数论：一个数x的数根（digital root）等于各位数字之和（sum-1）%9+1，也等于(x-1)%9+1