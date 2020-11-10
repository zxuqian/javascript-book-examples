class Employee {
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }
}

const emp = new Employee("张三", "软件开发部");
emp.name; // "张三"
emp.dept; // "软件开发部"
