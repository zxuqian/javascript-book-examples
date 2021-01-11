// chapter9/regexp3.js
let re = new RegExp("(abc)?", "g");
console.log(re.lastIndex); // 0
console.log(re.test("abcabcab")); // true
console.log(re.lastIndex); // 3
console.log(re.test("abcabcab")); // true
console.log(re.lastIndex); // 6
console.log(re.test("abcabcab")); // true
console.log(re.lastIndex); // 6
console.log(re.test("abcabcab")); // true
console.log(re.lastIndex); // 6
console.log(re.test("abcabcab")); // true
console.log(re.lastIndex); // 6
console.log(re.test("abcabcab")); // true
console.log(re.lastIndex); // 6
