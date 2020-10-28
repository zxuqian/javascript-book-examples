const blogPost = {
  id: 1,
  title: "JavaScript 教程",
  getSlug: function () {
    return "/post/" + title;
  },
  "update-at": "2020-10-26",
};

console.log(blogPost.title);
console.log(blogPost.author);
