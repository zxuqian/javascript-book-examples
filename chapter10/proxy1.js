// chapter10/proxy1.js
let obj = { a: 1, b: 2 };
let proxy = new Proxy(obj, {});
console.log(proxy); // { a: 1, b: 2 }
proxy.a = 2; // obj 中的 a 也会被修改
console.log(proxy.a); // 2
console.log(obj.a); // 2
delete proxy.b; // obj 中的 b 也会删除
console.log(obj.b); // undefined
