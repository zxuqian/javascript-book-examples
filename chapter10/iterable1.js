// chatper10/iterable1.js
const alphabetIterator = {
  charCode: 97,
  next() {
    if (this.charCode < 123) {
      let res = {
        value: String.fromCharCode(this.charCode),
        done: false,
      };
      this.charCode++;
      return res;
    } else {
      return {
        done: true,
      };
    }
  },
};

let alphabetIterator = {
  [Symbol.iterator]() {
    return alphabetIterator;
  },
};

// console.log([...alphabet]);

// for (let letter of alphabet) {
//   console.log(letter);
// }

const [a, b, c] = alphabetIterator;
console.log(a, b, c);
