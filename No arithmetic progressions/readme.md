# No arithmetic progressions
- codewars👉https://www.codewars.com/kata/5e0607115654a900140b3ce3/train/javascript

Consider a sequence, which is formed by the following rule: next term is taken as the smallest possible non-negative integer, which is not yet in the sequence, so that no 3 terms of sequence form an arithmetic progression.

Example
f(0) = 0 -- smallest non-negative
f(1) = 1 -- smallest non-negative, which is not yet in the sequence
f(2) = 3 -- since 0, 1, 2 form an arithmetic progression
f(3) = 4 -- neither of 0, 1, 4, 0, 3, 4, 1, 3, 4 form an arithmetic progression, so we can take smallest non-negative, which is larger than 3
f(4) = 9 -- 5, 6, 7, 8 are not good, since 1, 3, 5, 0, 3, 6, 1, 4, 7, 0, 4, 8 are all valid arithmetic progressions.

- solution 1:
  