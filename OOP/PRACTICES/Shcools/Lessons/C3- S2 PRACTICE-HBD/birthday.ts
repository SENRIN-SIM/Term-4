class Persons{
    name:string;
    yearOfBirth: number;

    constructor(name:string, yearOfBirth:number){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    getName(){
        return this.name;
    }

    getYearOfBirth(){
        return this.yearOfBirth;
    }
}

class Calendar {
    getCurrentDate(): Date {
      return new Date();
    }
  
    getMonthDayYear(date: Date): { month: number, day: number, year: number } {
      const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
      const day = date.getDate();
      const year = date.getFullYear();
  
      return { month, day, year };
    }

    getAgeOfPerson(birthPerson:number, currentYear:number){
        return currentYear - birthPerson
    }
  }

  //Example Person inf

  const Person_1 = new Persons("Senrin", 2003);
  const Person_2 = new Persons("Sarey", 2004);
  console.log(Person_1.getName());
  console.log(Person_1.getYearOfBirth());
  
  // Example currentDate
  const calendar = new Calendar();
  const currentDate = calendar.getCurrentDate();
  const { month, day, year } = calendar.getMonthDayYear(currentDate);
//   console.log(`Month: ${month}, Day: ${day}, Year: ${year}`);

  console.log(calendar.getAgeOfPerson(Person_1.getYearOfBirth(), year))
  console.log(calendar.getAgeOfPerson(Person_2.getYearOfBirth(), year))
  