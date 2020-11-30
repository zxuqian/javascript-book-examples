function* alphabetGenerator() {
  let step = 1;
  for (let charCode = 97; charCode < 123; charCode += step) {
    try {
      step = (yield String.fromCharCode(charCode)) || 1;
    } catch (error) {
      console.log("捕获了异常：" + error.message);
    }
  }
}
let gen = alphabetGenerator();
console.log(gen.next().value); // "a"
console.log(gen.next().value); // "b"
console.log(gen.throw(new Error("出错了")));
console.log(gen.next());
