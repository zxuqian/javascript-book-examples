function Message(message, sender) {
  this.message = message;
  this.sender = sender;
}

const msg = new Message("你好", "张三");
console.log(msg.message, msg.sender);
const msg2 = new Message("明天见", "李四");
console.log(msg2.message, msg2.sender);
