const promise1 = new Promise((resolve) => setTimeout(resolve, 300, 3));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 2));
const promise3 = new Promise((resolve) => setTimeout(resolve, 400, 1));

promise1
  .then(() => promise2)
  .then(() => promise3)
  .then((value) => {
    console.log(value);
  });
