# The highest profit wins!
- codewars👉https://www.codewars.com/kata/559590633066759614000063/train/javascript

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1, 2, 3, 4, 5])   == [1, 5]
minMax([2334454, 5])   == [5, 2334454]
minMax([1])           == [1, 1]

- solution 1:
  1. 判断长度是是否为1，如果是1，直接返回该元素
  2. 如果不是1，对数组进行从小到大的排序，返回第一个元素和最后一个元素

- solution 2:
  直接利用 Math.min() 和 Math.max() 求最大值和最小值