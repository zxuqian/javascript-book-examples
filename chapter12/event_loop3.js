// chapter12/event_loop3.js
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);

let p = new Promise((resolve) => {
  setTimeout(resolve, 100, 3);
});

async function asyncFunc() {
  console.log(4);
  const value = await asyncFunc2();
  console.log(value);
  console.log(5);
}

asyncFunc();

async function asyncFunc2() {
  const value = await p;
  console.log(value);
  return 6;
}

console.log(7);
