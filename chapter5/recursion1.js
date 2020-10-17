function addUp(n) {
  if (n <= 0) return 0;
  return n + addUp(n - 1);
}
console.log(addUp(10));

function addUpIterative(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUpIterative(10));
