// chapter12/async2.js
// 需要在浏览器中执行
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}
getPosts().then((posts) => console.log(posts));
