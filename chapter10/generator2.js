// chapter10/generator2.js
function* alphabetGenerator() {
  for (let charCode = 97; charCode < 123; charCode++) {
    yield String.fromCharCode(charCode);
  }
}

const alphabetIterator = alphabetGenerator();
console.log(alphabetIterator.next().value); // "a"
console.log(alphabetIterator.next().value); // "b"
console.log(alphabetIterator.next().value); // "c"

console.log("for of======================");
for (let letter of alphabetIterator) {
  console.log(letter);
}

alphabetIterator[Symbol.iterator] = alphabetGenerator;
for (let letter of alphabetIterator) {
  console.log(letter); // "a" - "z"
}

for (let letter of alphabetIterator) {
  console.log(letter); // "a" - "z"
}
