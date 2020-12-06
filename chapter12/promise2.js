const p = new Promise((resolve) => {
  console.log("in promise...");
  for (let i = 0; i < 10000000000; i++) {}
  resolve();
});
console.log("start");
