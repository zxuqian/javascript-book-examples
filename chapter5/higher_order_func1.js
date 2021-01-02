function square(f) {
  return (...args) => f(...args) ** 2;
}
const sum = (a, b) => a + b;
const squareOfSum = square(sum);
console.log(squareOfSum(1, 2));

const diff = (a, b, c) => a - b - c;
const squareOfDiff = square(diff);
console.log(squareOfDiff(9, 2, 1));
