function add(prop1, prop2) {
  return this[prop1] + this[prop2];
}

// console.log(add("a", "b")); // NaN

const obj = { a: 1, b: 2 };
const result = add.call(obj, "a", "b");
console.log(result); // 3
