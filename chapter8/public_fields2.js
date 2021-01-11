// chapter8/public_fields2.js
class Button {
  label = "按钮";
  html = `<button>${this.label}</button>`;
  constructor(type) {
    // 如果是链接形式的按钮，使用<a/>标签渲染
    if (type === "link") {
      this.html = `<a>${this.label}</a>`; // 修改 html 成员变量的值
    }
  }
}

const btn = new Button();
console.log(btn.html); // <button>按钮</button>
const linkBtn = new Button("link");
console.log(linkBtn.html); // <a>按钮</a>
