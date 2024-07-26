// Shape.ts

export abstract class Shape {
    leftX: number;
    bottomY: number;
    constructor(x: number, y: number){
        this.leftX = x;
        this.bottomY = y;
    }
    
    abstract getWidth(): number;
    abstract getHeight(): number;
    abstract getArea(): number;
}
