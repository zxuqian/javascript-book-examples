// chapter9/regexp4.js
let re = new RegExp("abc", "g");
"abcabc".match(re); // ["abc", "abc"]
re.lastIndex; // 0
re.exec("abcabc"); // ["abc", index: 0, input: "abcabc", groups: undefined]
re.lastIndex; // 3
re.exec("abcabc"); // ["abc", index: 3, input: "abcabc", groups: undefined]
re.lastIndex; // 6
