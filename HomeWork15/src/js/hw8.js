export class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this._marksArray = [];
    this._valid = true;
  }

  get marks() {
    if (!this._valid) return null;
    return this._marksArray;
  }
  set marks(mark) {
    if (this._valid) {
      this._marksArray.push(mark);
    }
  }
  getInfo() {
    console.log(
      `Студент ${this.course}го курсу ${this.university} ${this.fullName}`
    );
    return;
  }
  getAverageMark() {
    return (
      this._marksArray.reduce((sum, current) => sum + current, 0) /
      (this._marksArray.length || 1)
    );
  }
  dismiss() {
    this._valid = false;
  }
  recover() {
    this._valid = true;
  }
}

export class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    this.getScholarship();
  }
  getScholarship() {
    setInterval(() => {
      if (this._valid) {
        if (this.getAverageMark() >= 4) {
          return console.log("Ви отримали 1400 грн. стипендії");
        }
      }
    }, 1000);
  }
}

//Test1
// Stu1 = new Student("univ", 4, "Maz Naz Step");
// Stu1.getInfo();
// Stu1.marks = 5;
// console.log(Stu1.marks);
// Stu1.marks = 4;
// console.log(Stu1.marks);
// console.log(Stu1.getAverageMark());
// Stu2 = new Student("univPol", 3, "Bul Bar Fon");
// Stu2.getInfo();
// Stu2.marks = 3;
// console.log(Stu2.marks);
// Stu2.marks = 5;
// console.log(Stu2.marks);
// console.log(Stu2.getAverageMark());
// Stu1.dismiss();
// Stu1.marks = 5;
// console.log(Stu1.marks);
// Stu1.recover();
// console.log(Stu1.marks);

// //Test2
// Stu1 = new BudgetStudent("univ", 4, "Maz Naz Step");
// Stu1.getInfo();
// Stu1.marks = 5;
// console.log(Stu1.marks);
// Stu1.marks = 4;
// console.log(Stu1.marks);
