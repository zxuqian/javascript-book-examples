function increment(initialValue) {
  let result = initialValue;
  return function by(step) {
    result += step;
    return result;
  };
}
const incBy = increment(5);
const incByTwo = () => incBy(2);
const incByFour = () => incBy(4);

console.log(incByTwo()); // 7
console.log(incByFour()); // 11
console.log(incByFour()); // 15
