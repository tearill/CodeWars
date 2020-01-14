# Reverse words
- codewars👉https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript 

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

- 目标：把字符串中以空格隔开的每一个部分都reverse逆置一下 

- solution 1:
  1. 利用字符串split() 将字符串分割成数组 tips：过程中要利用正则保留分隔符->空格
  2. 此时数组的每个元素都是一个字符串，使用map()方法，再继续将字符串split()改造成数组
  3. 将再次分割出来的每个部分单独reverse() 进行翻转逆置，之后再使用join()拼接起来
  4. 使用数组的join() 将外层分割的数组重新拼接成为字符串

- solution 2:
  - 类似于solution 1
  1. 先将字符串分割成数组   
  2. 再将数组逆置后拼接成字符串   !elpmaxe na si sihT
  3. 再将字符串分割成数组逆置     [ 'sihT', 'si', 'na', '!elpmaxe' ]
  4. 最后将数组用空格拼接成字符串  sihT si na !elpmaxe