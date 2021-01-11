// chapter5/closure_inc2.js
function increment(initialValue) {
  let result = initialValue;
  return function by(step) {
    result += step;
    return result;
  };
}

const incFiveBy = increment(5);
console.log(incFiveBy(2)); // 7
console.log(incFiveBy(4)); // 11

const incTenBy = increment(10);
console.log(incTenBy(3)); // 13
console.log(incTenBy(5)); // 18
console.log(incFiveBy(1)); // 12
