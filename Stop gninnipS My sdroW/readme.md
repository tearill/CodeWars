# Stop gninnipS My sdroW!
- codewars👉https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

- solution 1:
  1. 将字符串用split根据空格分割成数组
  2. 遍历数组，判断每一项的长度，如果 > 5，就进行反转
  3. 再使用空格join成新的字符串

- solution 2:
  使用map优化solution 1