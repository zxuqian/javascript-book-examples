// chapter3/comparison1.js
5 > 6; // false
let a = 10;
a >= 10; // true
a < 4; // false
a < true; // false，这里 true 转换成了数字 1，10 不大于 1，所以返回 false
99999999n < 100000; // false, BigInt 和 Number 类型可以进行混合比较
