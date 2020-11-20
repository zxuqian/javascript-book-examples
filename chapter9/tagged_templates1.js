function bold(strings, ...exps) {
  let str = strings[0];
  exps.forEach((exp, i) => {
    str += `<b>${exp}</b>"` + strings[i + 1];
  });
  return str;
}

let word1 = "重要";
let word2 = "记住";
const str = bold`这句话很${word1}，需要${word2}`;
console.log(str);
