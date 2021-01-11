// chapter10/generator9.js
function* gf1() {
  yield 1;
  yield* gf2();
  yield 3;
}

function* gf2() {
  yield 2;
}

let g = gf1();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
