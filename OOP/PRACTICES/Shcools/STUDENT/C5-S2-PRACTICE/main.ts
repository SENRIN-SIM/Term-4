
// Main.ts
import { Square } from "./rectangle"; // Import Square class from Square.ts
import { circle } from "./circle";


// let square = new Square(23, 54, 5); // Create a square with coordinates (23, 54) and size 5
// console.log("Width:", square.getWidth()); // Output: Width: 5
// console.log("Height:", square.getHeight()); // Output: Height: 5
// console.log("Area:", square.getArea()); // Output: Area: 25


let circles = new circle(23, 54, 5); // Create a circle with coordinates (23, 54) and radius 5

console.log("Radius:", circles.getArea()); // Output: Radius: 5

