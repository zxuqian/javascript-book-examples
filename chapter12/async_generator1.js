async function* asyncAlphabetGen() {
  for (let charCode = 97; charCode < 123; charCode++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield String.fromCharCode(charCode);
  }
}

(async function () {
  for await (let letter of asyncAlphabetGen()) {
    console.log(letter);
  }
})();
