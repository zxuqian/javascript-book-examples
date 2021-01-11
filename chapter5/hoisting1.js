// chapter5/hoisting1.js
function func() {
  return x;
  x = 5;
  function x() {}
  var x;
}
console.log(func());
