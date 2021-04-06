// chapter7/prototype1.js
let arr = [1, 2, 3];
let p1 = Object.getPrototypeOf(arr);
p1; // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
p1 === Array.prototype; // true
let p2 = Object.getPrototypeOf(p1);
p2; // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ,…}
p2 === Object.prototype; // true
let p3 = Object.getPrototypeOf(p2);
p3; // null
