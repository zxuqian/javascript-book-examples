const base = { a: 1 };

const derived = Object.create(base);

console.log(Object.getPrototypeOf(derived) === base);

derived.b = 2;
console.log(derived);
