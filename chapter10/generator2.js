function* alphabetGenerator() {
  for (let charCode = 97; charCode < 123; charCode++) {
    yield String.fromCharCode(charCode);
  }
}

const alphabet = alphabetGenerator();
console.log(alphabet.next().value); // "a"
console.log(alphabet.next().value); // "b"
console.log(alphabet.next().value); // "c"

console.log("for of======================");
for (let letter of alphabet) {
  console.log(letter);
}

alphabet[Symbol.iterator] = alphabetGenerator;
for (let letter of alphabet) {
  console.log(letter); // "a" - "z"
}

for (let letter of alphabet) {
  console.log(letter); // "a" - "z"
}
