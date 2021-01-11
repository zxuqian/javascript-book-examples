// chapter4/continue1.js
let sum = 0;
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  sum += i;
}
console.log(sum);
