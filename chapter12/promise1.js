// chapter12/promise1.js
const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});
p.then((value) => console.log(value));
