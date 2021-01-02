const blogPost = {
  id: 1,
  title: "JavaScript 教程",
  getSlug: function () {
    return "/post/" + this.title;
  },
  author: "李明",
  comments: ["很好", "受教了", "加油"],
  "update-at": "2020-10-26",
};

console.log(Object.keys(blogPost));
Object.keys(blogPost).forEach((key) => {
  console.log(`${key}: ${blogPost[key]}`);
});
