const obj = {
  a: 1,
  f() {
    return 5;
  },
};

const newObj = Object.create(obj);
newObj.b = 2;

console.log(newObj.b);
console.log(newObj.a);
console.log(newObj.f());
console.log(Object.getPrototypeOf(newObj));
