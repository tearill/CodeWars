# WeIrD StRiNg CaSe
- codewars👉https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

- solution 1:
  1. 将字符串split成数组
  2. 使用 map 方法，将新数组的每一项的字符串再次split成数组
  3. 使用 map 将内部数组进行大小写转换处理后join回去
  4. 将外层数组用空格join

- solution 2：
  使用正则表达式
  1. replace 使用正则表达式每次匹配两个字母
  2. 将匹配到的两个字母分别转换成大写和小写
     要注意空格的情况，如果遇到空格就只能匹配到一个字母，并且该字母一定是下标为0的字母
     每次判断匹配到的字符串长度：
     - 如果为 1 ：说明匹配的字母后一项是空格，并且该字母一定是在奇数位置，将该字母转成大写返回
     - 如果为 2 : 将第一项转成大写，第二项转成小写