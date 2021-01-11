// chapter7/valueOf1.js
const obj = {
  a: 1,
  b: 2,
  valueOf() {
    return this.a + this.b;
  },
};

console.log(obj.valueOf());
console.log(+obj);
console.log(obj - 2);
