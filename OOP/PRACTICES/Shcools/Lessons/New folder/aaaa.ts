class person{
  constructor(protected name:string, protected age:number){
    this.name = name;
    this.age = age;
  }

  setPerson(name:string, age:number){ 
    this.name = name;
    this.age = age;
  }
}
class Student extends person{
  constructor(name:string, age:number){
    super(name, age);
  }
}
let student = new Student("Senrin", 12);

student.setPerson("lsdf", 12)


console.log(student);