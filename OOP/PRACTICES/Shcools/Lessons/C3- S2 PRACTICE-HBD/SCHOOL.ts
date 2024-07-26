class Student {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Classroom {
  private name: string;
  private school: School;
  private students: Student[] = [];

  constructor(school: School, name: string) {
    this.school = school;
    this.name = name;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  getNumberOfStudents(): number {
    return this.students.length;
  }
  
}

class School {
  private name: string;
  private classrooms: Classroom[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addClassroom(newCLassroom: Classroom)  {
    // let newCLassroom = new Classroom(school01, classroomName)
    this.classrooms.push(newCLassroom);
    return newCLassroom;
  }
}

let school01 = new School("PNC")

let classroom01 = new Classroom(school01, "Web-A")

let student01 = new Student("Senrin", "Sim")

classroom01.addStudent(student01)

school01.addClassroom(classroom01)

console.log(school01);
console.log(classroom01);

