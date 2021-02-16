let emp = {
  name: "张三",
  dept: {
    name: "信息技术部",
    manager: "李四",
  },
};

with (emp) {
  console.log(name); // 张三
  console.log(dept.name); // 信息技术部
}

with (emp.dept) {
  console.log(name); // 信息技术部
  console.log(manager); // 李四
}

const dept = emp.dept;
console.log(dept.name); // 信息技术部
console.log(dept.manager); // 李四

const { name: empName } = emp;
const { name: deptName, manager } = emp.dept;

console.log(empName); // 张三
console.log(deptName); // 信息技术部
console.log(manager); // 李四
