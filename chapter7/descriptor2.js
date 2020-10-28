const counter = {
  count: 1,
};
Object.defineProperty(counter, "current", {
  get() {
    return this.count;
  },
  set(value) {
    this.count = value;
  },
});

console.log(counter.current);
counter.current = 10;
console.log(counter.current);
