function increment(initialValue) {
  let result = initialValue;
  return function by(step) {
    result += step;
    return result;
  };
}

// const incBy = increment(5);
// console.log(incBy(2)); // 7
// console.log(incBy(4)); // 11

const incBy = increment(10);
console.log(incBy(3)); // 13
console.log(incBy(5)); // 18
