for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

// 使用立即执行函数
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    });
  })(i);
}
