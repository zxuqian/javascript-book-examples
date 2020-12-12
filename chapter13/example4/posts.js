const posts = [
  { id: 1, title: "标题 1", content: "内容 1" },
  { id: 2, title: "标题 2", content: "内容 2" },
  { id: 3, title: "标题 3", content: "内容 3" },
];

// const getAllTitle = () => {
//   return posts.map((post) => post.title);
// };

// const getAllContent = () => {
//   return posts.map((post) => post.content);
// };

// module.exports = { getAllTitle, getAllContent };

// exports 简写形式
// exports.getAllTitle = getAllTitle;
// exports.getAllContent = getAllContent;

// exports 直接导出
exports.getAllTitle = () => {
  return posts.map((post) => post.title);
};
exports.getAllContent = () => {
  return posts.map((post) => post.content);
};
