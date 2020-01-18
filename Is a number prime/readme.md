# Is a number prime?
- codewars👉https://www.codewars.com/trainer/javascript

Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example
is_prime(1)  /* false */
is_prime(2)  /* true  */
is_prime(-1) /* false */
Assumptions
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
There are no fancy optimizations required, but still the most trivial solutions might time out. Try to find a solution which does not loop all the way up to n.

- solution 1：
  判断一个数是否为素数
  1. 循环从2开始一直到 n-1 遇到有能让 n 整除的 i 的时候 break
  2. 判断 i 与 n 的大小
     如果 i < n-1 则这个数不是素数
     否则，这个数是素数