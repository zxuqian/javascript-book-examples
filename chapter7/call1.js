// chapter7/call1.js
function sum(prop1, prop2) {
  return this[prop1] + this[prop2];
}

// console.log(sum("a", "b")); // NaN

const obj = { a: 1, b: 2 };
const result = sum.call(obj, "a", "b");
console.log(result); // 3
