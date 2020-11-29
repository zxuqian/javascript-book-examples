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

console.log(alphabetIterator.next().value);
console.log(alphabetIterator.next().value);
console.log(alphabetIterator.next().value);
