function square(f) {
  return (...args) => f(...args) ** 2;
}
const add = (a, b) => a + b;
const squareOfSum = square(add);
console.log(squareOfSum(1, 2));

const diff = (a, b, c) => a - b - c;
const squareOfDiff = square(diff);
console.log(squareOfDiff(9, 2, 1));
