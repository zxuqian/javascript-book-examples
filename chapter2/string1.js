// chapter2/string1.js
const str = `这是一个多行文本。
这一行顶格写，输出的结果也是顶格的。
  这是行有缩进，结果也会缩进。
这一行有"双引号"、'单引号'符号，它们也会原样输出。
转义字符\n仍然会生效。如果想再输出\`反引号\`，还需要转义。
`;
console.log(str);