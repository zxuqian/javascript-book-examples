let obj = {
  [Symbol.toPrimitive](t) {
    if (t === "number") return 10;
    if (t === "string") return "10";
    return "";
  },
};
"hello " + obj; // "hello ", default
obj - 2; // 8, number
`${obj}`; // "10", string
