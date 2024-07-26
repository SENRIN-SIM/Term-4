class Contract {}

abstract class Employee {
  /**
   * @param name  employee name
   * @param employeeType can be either "DEVELOPPER" or "MANAGER" or "COMERCIAL"
   */
  constructor(private name: string, private employeeType: string) {}

  abstract getSalary(): number
}
class COMERCIAL extends Employee{
  private contacts: Contract[] = []; // this is intresting only for
  constructor(name: string, employeeType: string) {
    super(name, "COMERCIAL");
  }
  getSalary(): number {
    return this.contacts.length * 400;
  }
}

class Managers extends Employee{
  private teamMembers: Employee[] = []; // this is intresting  only
  constructor(name: string, employeeType: string) {
    super(name, "MANAGER");
  }
  getSalary(): number {
    return  this.teamMembers.length * 600;
  }
}

class Developer extends Employee {
  private skills: String[] = []; // this is intresting  only for develeppers
  constructor(name: string, employeeType: string) {
    super(name, "DEVELOPPER");
  }

  getSalary(): number {
    return  this.skills.length * 600;
    if (this.skills.includes("OOP")){
      return  this.skills.length * 2000;
    }
  }
}

const employee1 = new COMERCIAL("SENRIN", "COMERCIAL");
const employee2 = new Developer("SENRIN", "DEVELOPPER");

console.log(employee2.getSalary()+'$');







  // getSalary(): number {
  //   if (this.employeeType === "COMERCIAL") {
  //     return this.contracts.length * 400;
  //   } else if (this.employeeType === "MANAGER") {
  //     return this.teamMembers.length * 600;
  //   } else if (this.employeeType === "DEVELOPPER") {
  //     let salary = this.skills.length * 500;

  //     if (this.skills.includes("OOP")) {
  //       salary += 2000;
  //     }
  //     return salary;
  //   }
  //   return 0; // Else we don't know
  // }
