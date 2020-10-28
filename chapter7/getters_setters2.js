const user = {
  username: "",
  set setUsername(value) {
    if (value.length >= 5) {
      this.username = value;
    }
  },
};
user.setUsername = "testuser";
console.log(user.username);
