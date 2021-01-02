const title = getUserInput();

const blogPost = {
  id: 1,
  title,
  getSlug() {
    return "/post/" + this.title;
  },
  "update-at": "2020-10-26",
};

/**
 * 模拟获取用户输入的函数
 */
function getUserInput() {
  return "JavaScript 教程";
}
