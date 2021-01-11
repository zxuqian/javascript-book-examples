// chapter12/event_loop4.js
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);

new Promise((resolve) => {
  setTimeout(resolve, 1000, 3);
})
  .then((value) => {
    console.log(value);
  })
  .then(() => {
    console.log(4);
  });

async function asyncFunc1() {
  try {
    const v1 = await new Promise((resolve) => resolve(7));
    console.log(v1);
    await asyncFunc2();
  } catch (error) {
    console.log(error);
  } finally {
    console.log(8);
  }
  console.log(9);
}

asyncFunc1();

async function asyncFunc2() {
  console.log(5);

  throw 6;
}

console.log(10);
