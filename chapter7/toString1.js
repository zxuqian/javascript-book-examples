// chapter7/toString1.js
const obj = {
  a: 1,
  b: 2,
  toString() {
    return `a=${this.a}, b=${this.b}`;
  },
};

console.log(obj.toString());
console.log("对象字符串为：" + obj);
