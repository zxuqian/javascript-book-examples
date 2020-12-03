function getConnection() {
  let conn = null;
  try {
    console.log("获取数据库连接对象");
    conn = "连接对象";
    return conn;
  } catch {
    console.log("不能获取连接");
  } finally {
    console.log("关闭数据库对象");
    conn = "连接已关闭";
    // return conn;
  }
}

let conn = getConnection();
console.log(conn);
