// chapter4/for2.js
let sum = 0;
for (let i = 1; i <= 5; i++) {
  if (sum > 5) {
    break;
  }
  sum += i;
}
console.log(sum);
