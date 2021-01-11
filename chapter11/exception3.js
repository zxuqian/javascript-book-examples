// chapter11/exception3.js
function division(a, b) {
  // if (b === 0) throw new Error("除数不能为 0");
  if (b === 0) throw new RangeError("除数不能为 0");
  return a / b;
}
division(5, 0);
