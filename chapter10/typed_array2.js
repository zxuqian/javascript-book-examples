// chapter10/typed_array2.js
let buffer = new ArrayBuffer(4);
let dataView = new DataView(buffer);

console.log(dataView.setInt32(0, 0x1f320070));
console.log(dataView.getInt16(0)); // 7986
console.log(dataView.getInt16(2)); // 112
console.log(dataView.getInt16(0, true)); // 12831
console.log(dataView.getInt16(2, true)); // 28672

console.log(dataView.getInt16(1)); // 12800
