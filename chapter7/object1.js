// chapter7/object1.js
const blogPost = {
  id: 1,
  title: "JavaScript 教程",
  getSlug: function () {
    return "/post/" + this.title;
  },
  "updated-at": "2020-10-26",
};
