// chapter12/async_generator2.js
async function* asyncAlphabetGen() {
  for (let charCode = 97; charCode < 123; charCode++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield String.fromCharCode(charCode);
  }
}

const alphabet = {
  [Symbol.asyncIterator]() {
    return asyncAlphabetGen();
  },
};

(async function () {
  for await (let letter of alphabet) {
    console.log(letter);
  }
})();
