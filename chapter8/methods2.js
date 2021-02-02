// chapter8/methods2.js
class Employee {
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }

  signIn() {
    console.log("打卡上班");
  }

  askForLeave() {
    console.log("请假");
  }

  get info() {
    return `员工姓名：${this.name}，所在部门：${this.dept}`;
  }
  set info(value) {
    this.name = value.name;
    this.dept = value.dept;
  }
}

const emp = new Employee("张三", "软件开发部");
emp.name; // "张三"
emp.dept; // "软件开发部"

emp.signIn();
emp.askForLeave();

console.log(emp.info);
emp.info = { name: "李四", dept: "软件开发 II 部" };
console.log(emp.info);
