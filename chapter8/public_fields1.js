// chapter8/public_fields1.js
class Button {
  label = "按钮";
}

const btn = new Button();
console.log(btn.label);
btn.label = "跳转";
console.log(btn.label);
