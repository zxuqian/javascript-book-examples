// chapter5/scope3.js
{
  let i = 10;
}
console.log(i); // 引用错误，i 未定义

for (let j = 0; j < 10; j++) {}
console.log(j); // 引用错误，j 未定义
