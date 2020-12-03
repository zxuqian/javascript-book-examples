function setName(name) {
  if (!name) throw "name 不能为空";
  console.log("这行不会执行");
}
// 未捕获异常
// setName();

// 捕获异常
try {
  setName();
} catch (e) {
  console.error(e);
}
