# Convert string to camel case
- codewars👉https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

- solution 1:
  1. 把字符串中所有的-改成_，利用split()将字符串分割成数组
  2. 遍历分割好的数组，遇到'_'的时候把下一个元素改成大写，并用splice()将此元素从数组中删除
  3. 利用join()将数组重新连接成字符串并返回

- solution 2:
  1. 利用正则表达式匹配 _- 以及其后的第一个元素 /[-_](.)/g
  2. 把匹配到的东西利用replace()直接替换为其后第一个元素的大写形式
