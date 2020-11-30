let alphabetIterator = {
  [Symbol.iterator]: function* () {
    for (let charCode = 97; charCode < 123; charCode++) {
      yield String.fromCharCode(charCode);
    }
  },
};

// 或使用简写形式
let alphabet = {
  *[Symbol.iterator]() {
    for (let charCode = 97; charCode < 123; charCode++) {
      yield String.fromCharCode(charCode);
    }
  },
};
