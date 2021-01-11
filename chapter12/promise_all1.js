// chapter12/promise_all1.js
const promise1 = new Promise((resolve) => setTimeout(resolve, 300, 1));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 2));
const promise3 = 3;
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
