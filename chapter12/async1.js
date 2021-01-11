// chapter12/async1.js
const promise = new Promise((resolve) => setTimeout(resolve, 3 * 1000, "done"));
async function logResult() {
  const result = await promise;
  console.log(result);
}
logResult();
