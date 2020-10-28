const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  writable: true,
});

Object.defineProperty(obj, "a", {
  configurable: true,
});

Object.defineProperty(obj, "a", {
  enumerable: true,
});

Object.defineProperty(obj, "a", {
  writable: false,
}); // 正常，可以将 writable 从 true 改为 false

Object.defineProperty(obj, "a", {
  writable: true,
}); // 改为 false 后，无法再改成 true

Object.defineProperty(obj, "a", {
  get() {
    return 1;
  },
  set(value) {
    this.a = value;
  },
});
