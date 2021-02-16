// function Button(label) {
//   this.label = label;
//   this.handleClick = function () {
//     console.log(this.label);
//   };
// }
// 模拟触发点击事件
function emitClick(callback) {
  callback();
}

const btn = new Button("按钮");
emitClick(btn.handleClick);

// 解决方法 1
// function Button(label) {
//   this.label = label;
//   var self = this;
//   this.handleClick = function () {
//     console.log(self.label);
//   };
// }

// 解决方法 2
// function Button(label) {
//   this.label = label;
//   this.handleClick = () => {
//     console.log(this.label);
//   };
// }

// 解决方法 3
// function Button(label) {
//   this.label = label;
//   this.handleClick = function () {
//     console.log(this.label);
//   }.bind(this);
// }
