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

class SoftwareEngineer extends Employee {
  constructor(name, dept, skill) {
    super(name, dept);
    this.skill = skill;
  }
}

var se = new SoftwareEngineer("王五", "信息技术部", "JavaScript");
console.log(se.name, se.dept, se.skill);
