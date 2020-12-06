new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      new Array(NaN);
      resolve(5);
    } catch {
      reject("指定数组长度时必须是有效数字");
    }
  }, 1000);
})
  .then(
    (value) => {
      console.log(value);
    }
    // (error) => {
    //   console.log(error);
    // }
  )
  .catch((error) => {
    console.log(error);
  });
