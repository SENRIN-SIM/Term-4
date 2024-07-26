// // Inheritance======================
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("This animal name ".concat(this.name, " make a sound."));
    };
    return Animal;
}());
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat(name, sex) {
        var _this = _super.call(this, name) || this;
        _this.sex = sex;
        return _this;
    }
    return cat;
}(Animal));
var caty = new cat("Caty", "F");
caty.makeSound();
console.log(caty);
