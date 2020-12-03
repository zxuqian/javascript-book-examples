class ValidationError extends Error {
  constructor(message, input) {
    super(message + "，用户输入：" + input);
    this.name = ValidationError.name;
    this.input = input;
  }
}

function validatePassword(pwd) {
  if (!pwd || pwd.length < 8)
    throw new ValidationError("密码不能小于 8 位", pwd);
  return true;
}

try {
  validatePassword("123456");
} catch (e) {
  console.log(e instanceof ValidationError);
  console.log(e.name);
  console.log(e.message);
  console.log(e.input);
}
