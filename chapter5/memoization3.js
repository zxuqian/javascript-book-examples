// chapter5/memoization3.js
function memoize(fn) {
  let cache = {};
  return function (...args) {
    if (cache[args]) return cache[args];
    cache[args] = fn(...args);
    return cache[args];
  };
}

const fib = memoize(function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

const start = new Date().getTime();
console.log(fib(50));
const end = new Date().getTime();
console.log(`总计执行了：${end - start} 毫秒`);
