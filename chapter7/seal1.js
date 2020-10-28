const obj = { a: 1 };
Object.seal(obj);
console.log(Object.isSealed(obj)); // true
obj.b = 5; // 无效
console.log(obj.b); // undefined
obj.a = 10;
console.log(obj.a); // 10
delete obj.a;
console.log(obj.a); // 10
