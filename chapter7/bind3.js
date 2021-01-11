// chapter7/bind3.js
function curry(func) {
  return function _curry(...args) {
    if (args.length >= func.length) {
      return func.apply(null, args);
    } else {
      return _curry.bind(null, ...args);
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const addCurry = curry(add);

console.log(addCurry(2)(4)(10));
console.log(addCurry(1, 3)(6));
console.log(addCurry(4)(5, 7));
