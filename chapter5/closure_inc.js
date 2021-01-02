function increment(initialValue, step) {
  return initialValue + step;
}

let result = increment(10, 1);
result = increment(result, 1);
result = increment(result, 2);
console.log(result);
