function func() {
  return x;
  x = 5;
  function x() {}
  var x;
}
console.log(func());
