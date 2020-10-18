function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
const start = new Date().getTime();
console.log(fib(50));
const end = new Date().getTime();
console.log(`总计执行了：${end - start} 毫秒`);
