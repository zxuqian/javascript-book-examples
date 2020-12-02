let config = { env: "dev" };
config = new Proxy(config, {
  get(target, propName) {
    if (propName in target) {
      return target[propName];
    }
    return "default";
  },
});

// Reflect API
// config = new Proxy(config, {
//   get(target, propName) {
//     if (Reflect.has(target, propName)) {
//       return Reflect.get(target, propName);
//     }
//     return "default";
//   },
// });

console.log(config.env); // "dev"
console.log(config.version); // "default"
