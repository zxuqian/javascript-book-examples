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

let alphabet = {
  [Symbol.iterator]() {
    return { ...alphabetIterator };
  },
};

console.log([...alphabetIterator]);

for (let letter of alphabetIterator) {
  console.log(letter);
}

const [a, b, c] = alphabetIterator;
console.log(a, b, c);
