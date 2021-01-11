// chapter11/exception5.js
try {
  console.log("获取数据库连接对象");
  throw "出现错误";
} catch {
  console.log("不能获取连接");
} finally {
  console.log("关闭数据库对象");
}
