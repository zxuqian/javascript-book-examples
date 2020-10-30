const obj = {
  a: 1,
  get c() {
    return this.a + 12;
  },
  set c(value) {
    this.a += value;
  },
};

Object.defineProperty(obj, "a", { enumerable: false });

const newObj = Object.create(obj);
newObj.b = 2;
console.log(newObj.a);

// console.log(typeof newObj.c);
// newObj.c = 18;
// console.log(newObj.c);
