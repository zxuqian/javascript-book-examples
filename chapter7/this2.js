// chapter7/this2.js
function Func() {
  const init = () => {
    this.a = 5;
  };
  init();
}
const obj = new Func();
console.log(obj.a);
