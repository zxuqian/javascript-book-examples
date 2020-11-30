function* alphabetGenerator() {
  let step = 1;
  for (let charCode = 97; charCode < 123; charCode += step) {
    step = (yield String.fromCharCode(charCode)) || 1;
  }
}
let gen = alphabetGenerator();
console.log(gen.next().value); // "a"
console.log(gen.next().value); // "b"
console.log(gen.next(2).value); // "d"
console.log(gen.next().value); // "e"
