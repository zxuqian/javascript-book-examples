// chapter12/async_iterator1.js
const alphabet = {
  [Symbol.asyncIterator]() {
    return {
      charCode: 97,
      async next() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (this.charCode < 123) {
          let res = {
            value: String.fromCharCode(this.charCode++),
            done: false,
          };
          return res;
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

(async function () {
  for await (let letter of alphabet) {
    console.log(letter);
  }
})();
