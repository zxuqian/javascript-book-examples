function reorder(strings, ...exps) {
  console.log(strings);
  return `${exps[1]}：${exps[0]} 篇文章`;
}

let tag = "JS";
let res = reorder`共有 ${10} 篇文章在 ${tag} 标签下`;
console.log(res);
