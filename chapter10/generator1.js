function* generatorFunc() {
  yield 1;
  yield 2;

  // return 3;
}

let generator = generatorFunc();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
