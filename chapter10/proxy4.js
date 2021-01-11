// chapter10/proxy4.js
let user = { username: "user", password: 123456 };
user = new Proxy(user, {
  deleteProperty() {
    return false;
  },
});
console.log(delete user.username); // false
console.log(Reflect.deleteProperty(user, "password")); // false
console.log(user); // { username: 'user', password: 123456 }
