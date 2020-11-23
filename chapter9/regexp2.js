let re = new RegExp("abc", "g");
re.lastIndex; // 0
console.log(re.test("abcabc")); // true
console.log(re.lastIndex); // 3
console.log(re.test("abcabc")); // true
console.log(re.lastIndex); // 6
console.log(re.test("abcabc")); // false
