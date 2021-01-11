// chapter5/optional_params2.js
let defaultColor = "#02cf13";
function drawRect(width = 10, height = width / 2, color = defaultColor) {
  console.log(width, height, color);
}
drawRect(); // 10 5 #02cf13。
