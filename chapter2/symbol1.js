// Chapter2/symbol1.js
let obj = {};
let prop = Symbol("prop");
let prop2 = Symbol("prop");
obj[prop] = "value1";
obj[prop2] = "value2";

obj[prop]; // value1
obj[prop2]; // value2
