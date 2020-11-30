function* alphabetGenerator() {
  for (let charCode = 97; charCode < 123; charCode++) {
    yield String.fromCharCode(charCode);
  }
}

const alphabetIterator = alphabetGenerator();
console.log(alphabetIterator.next().value); // "a"
console.log(alphabetIterator.next().value); // "b"
console.log(alphabetIterator.return("stop")); // { value: "stop", done: true }
console.log(alphabetIterator.next()); // { value: undefined, done: true }
