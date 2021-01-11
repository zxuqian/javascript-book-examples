// chapter10/iterator2.js
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

for (
  let res = alphabetIterator.next();
  !res.done;
  res = alphabetIterator.next()
) {
  console.log(res.value);
}

console.log(alphabetIterator.next());
console.log(alphabetIterator.next());
console.log(alphabetIterator.next());
