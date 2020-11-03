const post = {
  id: 1,
  title: "如何学好 JavaScript",
  comments: [
    {
      id: 1,
      content: "好！",
      user: {
        id: 10,
        name: "张三",
      },
    },
    {
      id: 2,
      content: "Very good!",
      user: {
        id: 11,
        name: "李四",
      },
    },
  ],
};

const {
  title,
  comments: [
    ,
    {
      content: comment2Content,
      user: { name },
    },
  ],
} = post;

console.log(title, comment2Content, name);
