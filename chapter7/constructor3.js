// chapter7/constructor3.js
function Message(message, sender) {
  this.message = message;
  this.sender = sender;
}

Message.prototype = {
  constructor: Message,
  msgType: "文本",
  getMessage() {
    return this.message + " 发自：" + this.sender;
  },
};

const msg = new Message("你好", "张三");
const msg2 = new Message("明天见", "李四");

console.log(msg.msgType);
