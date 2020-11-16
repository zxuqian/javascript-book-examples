class Department {
  constructor(name, manager) {
    this.name = name;
    this.manager = manager;
  }

  get info() {
    return `部门名称：${this.name}，部门经理：${this.manager}`;
  }
}
class Employee {
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }

  get info() {
    return `员工姓名：${this.name}, ${this.dept.info}`;
  }
}

const dept = new Department("信息技术部", "李四");
const emp = new Employee("张三", dept);
console.log(emp.info);
