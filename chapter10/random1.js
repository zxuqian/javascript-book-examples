function generateRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const randomInt = () => generateRandomInt(0, 100);
console.log(randomInt());
console.log(randomInt());
console.log(randomInt());
console.log(randomInt());
