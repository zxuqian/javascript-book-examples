// chapter8/private_fields1.js
class Button {
  label = "按钮";
  #html = this.#generateHtml("button"); // 使用私有成员方法生成 html
  constructor(type) {
    // 如果是链接形式的按钮，使用<a/>标签渲染
    if (type === "link") {
      this.#html = this.#generateHtml("a"); // 使用私有成员方法生成 html
    }
  }
  render() {
    console.log(this.#html); // 可以在类中访问私有成员变量，注意变量前的#
  }
  #generateHtml(tag) {
    return `<${tag}>${this.label}</${tag}>`;
  }
}

const btn = new Button();
btn.render(); // <button>按钮</button>
btn.#generateHtml("button");
const linkBtn = new Button("link");
linkBtn.render(); // <a>按钮</a>
