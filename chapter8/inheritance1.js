// chapter8/inheritance1.js;
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
    this.dept = value.name;
  }
}

class Manager extends Employee {}

var mgr = new Manager("李经理", "信息技术部");
mgr.signIn();
mgr.askForLeave();
console.log(mgr.info);

console.log(mgr instanceof Manager);
console.log(mgr instanceof Employee);
console.log(mgr instanceof Object);
