const alphabet = {
  async *[Symbol.asyncIterator]() {
    for (let charCode = 97; charCode < 123; charCode++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      yield String.fromCharCode(charCode);
    }
  },
};

(async function () {
  for await (let letter of alphabet) {
    console.log(letter);
  }
})();
