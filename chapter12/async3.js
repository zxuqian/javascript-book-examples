// 需要在浏览器中执行
async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (res.status >= 400) {
      throw res.status;
    }
    const posts = await res.json();
    return posts;
  } catch (error) {
    if (error === 404) {
      return [];
    } else {
      console.log(error);
    }
  }
}
