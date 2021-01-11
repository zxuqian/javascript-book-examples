// chapter10/generator3.js
function* alphabetGenerator() {
  for (let charCode = 97; charCode < 123; charCode++) {
    yield String.fromCharCode(charCode);
  }
}

let alphabetIterator = {
  [Symbol.iterator]: alphabetGenerator,
};

console.log([...alphabetIterator]);

for (let letter of alphabetIterator) {
  console.log(letter);
}
