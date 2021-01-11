// chapter12/promise4.js
// 需要在浏览器中执行
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);
  });
