// chapter7/constructor2.js
function Message(message, sender) {
  this.message = message;
  this.sender = sender;
}

const msg = new Message("你好", "张三");
const msg2 = new Message("明天见", "李四");

Message.prototype.getMessage = function () {
  return this.message + " 发自：" + this.sender;
};

console.log(msg.getMessage());
console.log(msg2.getMessage());
