# Mexican Wave
- codewars👉https://www.codewars.com/trainer/javascript

Task
 	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
Rules
 	1.  The input string will always be lower case but maybe empty.
    2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

- solution 
  结果可以分成三个部分，大写字母之前的内容 + 大写字母 + 大写字母之后的内容
  1. 将字符串使用split变成数组
  2. 对新数组进行遍历
  3. 大写字母之前的部分：index 位置之前的元素，slice(0, index) // index 为当前所处的下标 每一个下标都有一次机会变成大写
     大写字母: index 位置的元素
     大写字母之后的部分：index 位置之后的元素
  4. 将三个部分当作数组的一个元素push进结果数组中