function increment(initialValue) {
  let result = initialValue;
  return function by(step) {
    result += step;
    return result;
  };
}
const incFiveBy = increment(5);
const incFiveByTwo = () => incFiveBy(2);
const incFiveByFour = () => incFiveBy(4);

console.log(incFiveByTwo()); // 7
console.log(incFiveByFour()); // 11
console.log(incFiveByFour()); // 15
