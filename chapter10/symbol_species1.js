class CustomArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}
let ca = new CustomArray(1, 2, 3);
let squared = ca.map((v) => v ** 2);

console.log(squared instanceof CustomArray); // true
console.log(squared instanceof Array); // true
