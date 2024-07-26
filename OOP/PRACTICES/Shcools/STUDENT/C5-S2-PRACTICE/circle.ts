import { Shape } from "./shape";

export class circle extends Shape{
    private radius: number;
    constructor(x: number, y: number, radius: number) {
        super(x, y);
        this.radius = radius;
    }
    getWidth(): number {
        return this.radius * 2;
    }
    getHeight(): number {
        return this.radius * 2;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}