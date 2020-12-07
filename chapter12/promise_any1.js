const promise1 = new Promise((resolve) => setTimeout(resolve, 300, 1));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 2));
const promise3 = 3;
Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
