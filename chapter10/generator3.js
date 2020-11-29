function* alphabetGenerator() {
  for (let charCode = 97; charCode < 123; charCode++) {
    yield String.fromCharCode(charCode);
  }
}

let alphabet = {
  [Symbol.iterator]: alphabetGenerator,
};

console.log([...alphabet]);

for (let letter of alphabet) {
  console.log(letter);
}
