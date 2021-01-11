// chapter10/proxy5.js
let findTwo = (x) => x === 2;
findTwo = new Proxy(findTwo, {
  apply(target, thisArg, args) {
    console.log(`调用了函数 ${target}，this 为 ${thisArg}，参数为 ${args}`);
    return Reflect.apply(target, thisArg, args);
  },
});

[1, 2, 3].find(findTwo);
