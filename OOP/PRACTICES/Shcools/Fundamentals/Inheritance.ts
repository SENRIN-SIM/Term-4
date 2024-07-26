// // Inheritance======================

// // Parent class
// class Animal {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     // Method to make a sound
//     makeSound(): void {
//         console.log(`${this.name} makes a sound`);
//     }
// }

// // Child class inheriting from Animal
// class Dog extends Animal {
//     breed: string;

//     constructor(name: string, breed: string) {
//         super(name); // Call the constructor of the parent class
//         this.breed = breed;
//     }

//     // Method specific to Dog class
//     wagTail(): void {
//         console.log(`${this.name} wags its tail`);
//     }
// }

// // Create a new Dog object
// let myDog = new Dog("Buddy", "Golden Retriever");

// // Accessing properties and methods from both parent and child class
// console.log("Dog's Name:", myDog.name); // Output: Buddy
// console.log("Dog's Breed:", myDog.breed); // Output: Golden Retriever
// myDog.makeSound(); // Output: Buddy makes a sound
// myDog.wagTail(); // Output: Buddy wags its tail


class Animal {
    name: string;

    constructor(name:string){
        this.name = name;
    }

    makeSound(){
        console.log(`This animal name ${this.name} make a sound.`);
        
    }
}
class cat extends Animal{
    sex: string;

    constructor(name:string, sex:string){
        super(name)
        this.sex = sex
    }
}

let caty = new cat("Caty", "F")

caty.makeSound()

console.log(caty);
