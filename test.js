let emp = {
  name: "张三",
  dept: {
    name: "信息技术部",
    manager: "李四",
  },
};

with (emp) {
  console.log(name);
}

with (emp.dept) {
  console.log(name);
}
