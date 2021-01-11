// chapter9/string1.js
let str = "这是一个字符串";
console.log(str.substring(4, 1)); // 结束索引大于起始索引
console.log(str.substring(2, 2)); // 结束索引等于起始索引
console.log(str.substring(4, 12)); // 索引大于 length
console.log(str.substring(-2)); // 索引为负数
console.log(str.substring(4, NaN)); // 索引为 NaN
