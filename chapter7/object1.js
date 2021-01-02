const blogPost = {
  id: 1,
  title: "JavaScript 教程",
  getSlug: function () {
    return "/post/" + this.title;
  },
  "update-at": "2020-10-26",
};
