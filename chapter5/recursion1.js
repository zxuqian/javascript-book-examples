function addUp(n) {
  if (n <= 0) return 0;
  return n + addUp(n - 1);
}

console.log(addUp(10));
