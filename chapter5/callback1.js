/**
 * // chapter5/callback1.js
 * @param {object} user 用户数据
 * @param {(success: boolean) => void} callback
 */
function addUser(user, callback) {
  console.log(`保存 ${user.username} 成功！`);
  callback(true);
}

addUser({ username: "user" }, function (success) {
  if (success) {
    // 成功后的操作
    console.log(`添加成功！`);
  }
});
