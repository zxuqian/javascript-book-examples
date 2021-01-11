// chapter6/array_da2.js
let arr = [1, 2, 3, 4];
// 更改 2、3、4 的位置
[arr[3], arr[2], arr[1]] = [arr[1], arr[2], arr[3]];
arr; // [1, 4, 3, 2]
