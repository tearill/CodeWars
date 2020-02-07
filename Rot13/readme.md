# Rot13  

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

- solution 1:
  1. 获取字符的ASCII码
  2. 如果是非字母和数字，直接返回该字符
  3. 如果是字母：  
     1. a - n, A - N ASCII码加13
     2. n - z, N - Z ASCII码减13

- solution 2:
  1. 借用正则表达式全局匹配和replace替换字符串中的字母 
  2. 把所有的字母全部转成小写或大写(减少判断条件)和n比较
  3. 如果 > n，ASCII码减 13  
     如果 < n，ASCII码加 13