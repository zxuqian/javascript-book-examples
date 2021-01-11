// chapter5/memoization2.js
function fib(n) {
  if (n <= 1) return n;
  if (fib[n]) return fib[n];
  fib[n] = fib(n - 1) + fib(n - 2);
  return fib[n];
}
const start = new Date().getTime();
console.log(fib(50));
const end = new Date().getTime();
console.log(`总计执行了：${end - start} 毫秒`);
