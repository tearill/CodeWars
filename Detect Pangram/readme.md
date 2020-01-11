# Detect Pangram
- codewars👉https://www.codewars.com/kata/545cedaa9943f7fe7b000048

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

- 过滤非字母符号以及重复的字母
  - 全部转换为小写字母
  - 利用正则表达式过滤非字母
  - 利用js中的Set数据结构 实现字母的去重
  - 判断最后留下的元素的长度是否为26 如果是26则表示包含全部的26个英文字母
  const set = new Set(string.toLowerCase().match(/[a-z]/g))
- 正则表达式中
  [a-z] 匹配所有小写字母a-z
  ?!.*\1 匹配元素只出现一次
  /ig 匹配选项 i表示不区分大小写 g表示全部匹配
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
