const obj = { a: 1, b: { c: 2 } };
console.log(JSON.stringify(obj, null, 2));
console.log(JSON.stringify(obj, null, "\t"));
