// chapter5/pure_function1.js
// 修改了按引用传递的参数的值，data 对象发生了变化
function update(data) {
  data.id = 5;
}
const data = { id: 1 };
update(data);

// 网络请求，有可能出错，也有可能后端数据变化
async function getData() {
  const res = await fetch("http://test.com/api");
  return await res.json();
}
