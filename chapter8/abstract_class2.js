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

function drawShape(shape) {
  shape.draw();
}

drawShape(new Rectangle());
const someObj = {
  draw() {
    console.log("随意对象...");
  },
};
drawShape(someObj);
