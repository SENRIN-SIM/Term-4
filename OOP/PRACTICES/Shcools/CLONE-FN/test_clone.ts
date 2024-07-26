class Point {
    private x:number;
    private y:number;
    constructor(x: number, y: number){}

    public translateX(deltaX : number) {
        return new Point(this.x + deltaX, this.y);
    }
    public clone(){
        return new Point(this.x, this.y);
    }    
    
}

let p1 = new Point(10, 20)
let p2 = p1.clone();
let p3 = p1.translateX(50)
console.log(p1);
console.log(p3);
