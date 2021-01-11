// chapter9/string4.js
let tags = "前端, JavaScript, React, Vue, Angular";
console.log(tags.split(", ")); // [ '前端', 'JavaScript', 'React', 'Vue', 'Angular' ]
console.log(tags.split(", ", 2)); // [ '前端', 'JavaScript' ]

let lines = "第一行\n\r第二行\n\r第三行";
console.log(lines.split("\n\r")); // [ '第一行', '第二行', '第三行' ]

let str = "hello";
console.log(str.split()); // [ 'hello' ]
console.log(str.split("")); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log("😉".split("")); // [ '�', '�' ]
