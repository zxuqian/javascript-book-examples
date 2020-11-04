// 按值传递
function byValue(x) {
  x = 10;
}
let x = 5;
byValue(x);
console.log(x); // 5

// 按引用传递
function byRef(obj) {
  obj.x = 12;
}
const obj = {
  x: 8,
};
byRef(obj);
console.log(obj.x); // 12
