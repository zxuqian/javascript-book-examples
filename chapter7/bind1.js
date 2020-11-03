const obj = {
  a: 1,
  f(b) {
    return this.a + b;
  },
};

const f = obj.f;
console.log(f(10));
const boundF = f.bind(obj);
console.log(boundF(10));
