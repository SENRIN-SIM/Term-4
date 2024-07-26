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
// Base Class (Superclass)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound"));
    };
    return Animal;
}());
//subclass (childclass)
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this; // Call the constructor of the superclass
    }
    //   speak(): void {
    //     console.log(`${this.name} barks`);
    //   }
    Dog.prototype.wagTail = function () {
        console.log("".concat(this.name, " wags its tail"));
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy");
dog.speak(); // Outputs: Buddy barks
dog.wagTail(); // Outputs: Buddy wags its tail
