class Vehicle{
    color: string = "White";
    name: string;
    speed: number;
    mileAge: number;
    constructor(name:string, speed:number, mileAge:number){
        this.name = name;
        this.speed = speed;
        this.mileAge = mileAge;
    }
}

const vehicle = new Vehicle("Toyota", 120, 12000);
console.log(vehicle);

// =======================================

class Numbers {
    constructor(public a:number, public b: number){
    }
    getSquare(){
        return new Numbers((this.a)**2, (this.b)**2)
    }
}
let obj = new Numbers(2,3)
console.log('a='+obj.getSquare().a+', b='+obj.getSquare().b);

// =====================================

class Rectangle{
    width: number;
    height: number;
    constructor(width:number, height: number){
        this.width = width;
        this.height = height;
    }
    getArea(): number{
        return this.width * this.height;
    }

}
let kitchen = new Rectangle(4, 5);
let beroom = new Rectangle(5, 6);
let classroom = new Rectangle(8, 9);
let total:number = kitchen.getArea()+ beroom.getArea() + classroom.getArea()

console.log(total)

// =================================================
class Student {
    name:string;
    address: Address[];
    constructor(name:string){
       this.name = name;
       this.address = [];
    }
    getAddress(address){
      this.address.push(address);
    }
  }
  
  class Address {
    city: string;
    street: string;
    country: string;
    constructor(city: string, street: string, country: string){
      this.city = city;
      this.street = street;
      this.country = country;
    } 
  }

const student01 = new Student("Sok Seyha");

const address01 = new Address("Phnom Penh", "Norodom Blvd", "Cambodia");

student01.getAddress(address01);

console.log(student01);