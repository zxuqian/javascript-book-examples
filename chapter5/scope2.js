// chapter5/scope2.js
let x = 5;
function outerFunc() {
  let x = 4;
  function innerFunc() {
    let x = 7;
    console.log(x);
  }
  console.log(x);

  return innerFunc;
}

let innerFunc = outerFunc();

innerFunc();

console.log(x);
