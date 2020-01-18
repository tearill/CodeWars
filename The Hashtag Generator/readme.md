# The Hashtag Generator
- codewars👉https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

- solution 1:
  1. trim()去除空格 -> 结果为空则返回false
  2. 将字符串中的 n 个空和它后面的一个字母替换成字母的大写
  3. 将字符串的第一个字母转换成大写(防止第一个字母前没有空格匹配不到的情况)
  4. 拼接 # 和剩下的字母并判断字符串长度

- solution 2：
  solutio 1 存在一定的问题：如果每个单词的非首字母是大写的话，结果字符串未考虑将其转成小写
  1. trim()去除空格 -> 结果为空则返回false
  2. 使用 split 将字符串根据空格分割成数组
  3. 把数组的每一项的第一个字符转成大写格式，其余字符 slice 出来转成小写
  4. 返回时判断字符串长度