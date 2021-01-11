// chapter10/proxy3.js
let user = { username: "user", password: 123456 };
console.log(Object.keys(user));
user = new Proxy(user, {
  ownKeys(target) {
    return Reflect.ownKeys(target).filter(
      (propName) => propName !== "password"
    );
  },
});
console.log(Object.keys(user));
