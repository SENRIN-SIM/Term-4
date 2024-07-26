
// Square.ts
import { Shape } from "./shape"; // Import Shape class from Shape.ts

export class Square extends Shape {
    protected size: number;

    constructor(x: number, y: number, size: number) {
        super(x, y);
        this.size = size;
    }

    getWidth(): number {
        return this.size; // Width of a square is equal to its size
    }

    getHeight(): number {
        return this.size; // Height of a square is equal to its size
    }

    getArea(): number {
        return this.size * this.size; // Area of a square is size * size
    }
}


