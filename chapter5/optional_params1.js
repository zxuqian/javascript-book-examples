// chapter5/optional_params1.js
// options 为可选参数
function init(arg1, arg2, options) {
  // 初始化操作
  if (options) {
    // 自定义配置
  }
}
init("value1", "value2");
init("value1", "value2", { prop: "value" });
