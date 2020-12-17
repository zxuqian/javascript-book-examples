let score = 75;
// if...else if...else
if (score > 90) {
  console.log("优秀");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

// while 循环，打印 0 到 9 的数字
let count = 0;
while (count < 10) {
  console.log(count++); // 打印出 count，然后自身加 1
}

// 同样功能的 for 循环
for (let i = 0; i < 10; i++) {
  console.log(i);
}
