// chapter12/promise3.js
new Promise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
})
  .then((value) => {
    // 第 1 个 then
    console.log(value);
    return 10;
  })
  .then((value) => {
    // 第 2 个 then
    console.log(value);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(15);
      }, 3 * 1000);
    });
  })
  .then((value) => {
    // 第 3 个 then
    console.log(value);
  })
  .then(() => {
    // 第 4 个 then
    console.log("done");
  });
