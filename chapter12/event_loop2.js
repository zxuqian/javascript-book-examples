// chapter12/event_loop2.js
setTimeout(() => {
  console.log(1);
}, 0);
new Promise((resolve) => {
  resolve(2);
})
  .then((value) => {
    console.log(value);
    return 3;
  })
  .then((value) => console.log(value));
