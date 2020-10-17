function usdToCny(amount, rate) {
  return amount * rate;
}
console.log(usdToCny(1, 6.78));
console.log(usdToCny(8, 6.78));

function convertRate(rate) {
  return (amount) => amount * rate;
}

// 普通调用
// console.log(convertRate(6.78)(10)); // 67.8

// 记录中间值
const uToC = convertRate(6.78);
console.log(uToC(1)); // 6.78
console.log(uToC(8)); // 54.24

const cToJ = convertRate(15.74);
const uToJ = (amount) => uToC(cToJ(amount));
console.log(uToJ(1));
