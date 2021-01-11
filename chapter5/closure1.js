// chapter5/closure1.js
function sayHello(name) {
  function message() {
    console.log("你好！" + name);
  }
  message();
}
sayHello("李明"); // 你好！李明
