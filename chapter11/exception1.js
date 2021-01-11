// chapter11/exception1.js
try {
  let obj = undefined;
  obj.method();
} catch (e) {
  console.error(e.name);
  console.error("不能访问 undefined 中的方法");
}
console.log("此行能正常执行");
