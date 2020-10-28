const blogPost = {
  id: 1,
  title: "JavaScript 教程",
  getSlug: function () {
    return "/post/" + title;
  },
  author: "李明",
  comments: ["很好", "受教了", "加油"],
  "update-at": "2020-10-26",
};

for (let key in blogPost) {
  console.log(`${key}: ${blogPost[key]}`);
}
