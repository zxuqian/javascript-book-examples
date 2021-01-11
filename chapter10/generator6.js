// chapter10/generator6.js
function* generatorFunc() {
  let param1 = yield 1; // yield 1 返回 "b"
  console.log(param1);
  let param2 = yield 2; // yield 2 返回 "c"
  console.log(param2);
}
let gen = generatorFunc();
gen.next("a"); // 被忽略
gen.next("b"); // "b"
gen.next("c"); // "c"
