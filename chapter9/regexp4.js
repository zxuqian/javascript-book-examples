let re = new RegExp("abc", "g");
console.log("abcabc".match(re)); // ["abc", "abc"]
console.log(re.lastIndex); // 0
console.log(re.exec("abcabc")); // ["abc", index: 0, input: "abcabc", groups: undefined]
console.log(re.lastIndex); // 3
