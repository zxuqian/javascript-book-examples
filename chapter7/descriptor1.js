// chapter7/descriptor1.js
const obj = {};
Object.defineProperty(obj, "a", {
  value: 1,
  configurable: false,
  enumerable: false,
  writable: false,
});

console.log(obj.a);
obj.a = 2;
console.log(obj.a);
delete obj.a;
console.log(obj.a);
console.log(Object.keys(obj));
