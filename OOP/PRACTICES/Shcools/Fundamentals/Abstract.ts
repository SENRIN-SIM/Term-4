
// Abstract Classes:================

// Abstract class representing a shape
abstract class Shape {
    abstract area(): number
}

// Concrete subclass Circle extending Shape
class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    // Implementing abstract method area() for Circle
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Concrete subclass Rectangle extending Shape
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    // Implementing abstract method area() for Rectangle
    area(): number {
        return this.width * this.height;
    }
}

// Create instances of Circle and Rectangle
let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);

// Calling the area method for both shapes
console.log("Circle Area:", circle.area()); // Output: 78.53981633974483
console.log("Rectangle Area:", rectangle.area()); // Output: 24

