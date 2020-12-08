setTimeout(() => {
  console.log(1);
}, 0);
new Promise((resolve) => {
  resolve(2);
}).then((value) => console.log(value));
