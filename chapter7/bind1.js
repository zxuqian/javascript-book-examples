// chapter7/bind1.js
const obj = {
  a: 1,
  f(b) {
    return this.a + b;
  },
};

const f = obj.f;
console.log(f(10)); // NaN
const boundF = f.bind(obj);
console.log(boundF(10)); // 11
