// chapter7/this1.js
const obj = {
  a: 1,
  f() {
    console.log(obj === this);
    console.log(this.a);
  },
};
obj.f();
