// chapter13/example3/index.js

// 命名导入
import { a, add, obj } from "./module1.js";

// 默认导入
import sum from "./sum.js";
// 或
import plus from "./sum.js";

// 命名+默认导入
import Button, { ButtonCircle, ButtonRect } from "./button.js";

// 别名导入，add 与第 2 行导入的同名
import { add as addForThree } from "./module2.js";

// 只执行代码
import "./module3.js";

// 导入 Form 表单模块
import {
  InputText,
  InputPwd,
  InputCheckbox,
  Select,
  Radio,
} from "./form/index.js";

// 动态导入
function handleClickEvent() {
  import("./button.js").then((button) => {
    button.default;
    button.ButtonCircle;
    button.ButtonRect;
  });
}

// async function handleClickEvent() {
//   let button = await import("./button.js");
//   button.default;
//   button.ButtonCircle;
//   button.ButtonRect;
// }
