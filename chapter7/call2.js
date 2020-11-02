function Message(message, sender) {
  this.message = message;
  this.sender = sender;
}

function TextMessage(message, sender) {
  Message.call(this, message, sender);
  this.msgType = "文本消息";
}

function EmojMessage(message, sender) {
  Message.call(this, message, sender);
  this.msgType = "表情消息";
}

const txtMsg = new TextMessage("你好", "张三");
const emjMsg = new EmojMessage("😄", "李四");

console.log(txtMsg.message, txtMsg.msgType);
console.log(emjMsg.message, emjMsg.msgType);
