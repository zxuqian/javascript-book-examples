function Func() {
  const init = () => {
    this.a = 5;
  };
  init();
}
const obj = new Func();
console.log(obj.a);
