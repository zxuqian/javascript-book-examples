// chapter7/getters_setters2.js
const user = {
  _username: "",
  set username(value) {
    if (value.length >= 5) {
      this._username = value;
    }
  },
  get username() {
    return this._username;
  },
};
user.username = "testuser";
console.log(user.username);
