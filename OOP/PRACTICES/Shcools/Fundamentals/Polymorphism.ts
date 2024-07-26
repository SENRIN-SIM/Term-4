// Polymorphism==================

// Parent class
class Animals {
    // Method to make a sound
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

// Child class overriding the makeSound method
class aDogs extends Animal {
    // Method overriding
    makeSound(): void {
        console.log("Dog barks");
    }
}

// Child class overriding the makeSound method
class aCats extends Animal {
    // Method overriding
    makeSound(): void {
        console.log("Cat meows");
    }
}

// Create instances of Dog and Cat
let myDogs = new aDogs('');
let myCats = new aCats('');

// Polymorphism in action
myDogs.makeSound(); // Output: Dog barks
myCats.makeSound(); // Output: Cat meows