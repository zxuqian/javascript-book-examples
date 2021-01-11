// chapter2/symbol2.js
let obj = {};
obj[Symbol.for("prop")] = "value1";
obj[Symbol.for("prop")]; // value1

obj[Symbol.for("prop")] = "value2";
obj[Symbol.for("prop")]; // value2
