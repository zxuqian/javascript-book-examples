// chapter7/object3.js
const blogPost = {
  id: 1,
  title: "JavaScript 教程",
  getSlug: function () {
    return "/post/" + this.title;
  },
  "update-at": "2020-10-26",
};

blogPost.title; // "JavaScript 教程"
blogPost.getSlug(); // /post/JavaScript 教程
blogPost.author; // undefined
