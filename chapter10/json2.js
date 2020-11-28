function replacer(key, value) {
  if (typeof value === "number") {
    return undefined;
  }
  return value;
}
const post = { id: 1, title: "博客标题", comments: [{ id: 1, content: "好" }] };
const json = JSON.stringify(post, replacer);
console.log(json);
