// chapter8/abstract_class1.js
class AbstractShape {
  constructor() {
    if (new.target === AbstractShape) {
      throw "不能直接初始化抽象类";
    }
  }

  draw() {
    throw "未定义";
  }
}

class Rectangle extends AbstractShape {
  draw() {
    console.log("绘制矩形");
  }
}

class Circle extends AbstractShape {
  draw() {
    console.log("绘制圆形");
  }
}

// const shape = new AbstractShape();
const rect = new Rectangle();
const circle = new Circle();

rect.draw();
circle.draw();
