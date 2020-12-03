function division(a, b) {
  if (typeof a !== "number") throw new TypeError("a 必须为数字");
  if (typeof b !== "number") throw new TypeError("b 必须为数字");
  if (b === 0) throw new RangeError("除数不能为 0");
  return a / b;
}

try {
  division(1, "a");
  // division(1, 0);
} catch (e) {
  if (e instanceof TypeError) {
    console.log("类型不正确");
  } else if (e instanceof RangeError) {
    console.log("取值不正确");
  } else {
    console.log(e);
  }
}
