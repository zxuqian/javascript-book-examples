// chapter12/promise_all2.js
const promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 300, "失败")
);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 2));
const promise3 = 3;
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
