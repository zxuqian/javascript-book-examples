// 需要在浏览器中执行
async function* fetchPosts() {
  let page = 1;
  while (true) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`
      );
      const posts = await res.json();
      if (posts && posts.length > 0) {
        yield* posts;
        page++;
      } else {
        break;
      }
    } catch (error) {
      break;
    }
  }
}

(async function () {
  let posts = [];
  for await (let post of fetchPosts()) {
    if (posts.length < 50) {
      posts.push(post);
    }
  }
  console.log(posts);
})();
