fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    const status = res.status;
    if (status === 404 || status === 500) {
      throw status;
    }
    return res.json();
  })
  .catch((error) => {
    if (error === 404) {
      console.log("未请求到数据");
      return [];
    }
    throw error;
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log(error);
  });
