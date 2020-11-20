let str = "这是一个字符串";
console.log(str.slice(1, 4)); // 正常情况
console.log(str.slice(4, 1)); // 结束索引大于起始索引
console.log(str.slice(-2)); // 索引为负数
console.log(str.slice(4, NaN)); // 结束索引为 NaN
