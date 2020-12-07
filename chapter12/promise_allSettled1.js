const promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 300, "失败")
);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 2));
const promise3 = 3;
Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
