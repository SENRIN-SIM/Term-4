class Point {
  // Point class representing a point in 2D space
  constructor(public x: number, public y: number) {}

  // Method to check if two points are equal
  isEqual(other: Point): boolean {
    return this.x === other.x && this.y === other.y;
  }
  
  // Method to translate the point by given x and y offsets
  translate(x: number, y: number): Point {
    // Return a new Point with translated coordinates
    return new Point(this.x + x, this.y + y);
  }
}

class Line {
  // Line class representing a line segment between two points
  constructor(
    public point1: Point,
    public point2: Point,
    public color: string
  ) {}

  // Method to check if two lines are equal
  isEqual(other: Line): boolean {
    return (
      this.color === other.color &&
      this.point1.isEqual(other.point1) &&
      this.point2.isEqual(other.point2)
    );
  }
 
  // Method to translate the line by given x and y offsets
  translate(x: number, y: number): Line {
    // Return a new Line with translated points
    return new Line(
      this.point1.translate(x, y),  // Translate the first point
      this.point2.translate(x, y),  // Translate the second point
      this.color
    );
  }
}

class Graphic2D {
  // Graphic2D class representing a collection of lines
  private lines: Line[] = [];

  // Method to check if the graphic contains a line
  contains(newLine: Line): boolean {
    for (let line of this.lines) {
      if (line.isEqual(newLine)) {
        return true;
      }
    }
    return false;
  }

  // Method to add a new line to the graphic
  addLine(newLine: Line) {
    if (!this.contains(newLine)) {
      this.lines.push(newLine);
    }
  }
}

// Creating points and lines
let p1 = new Point(10, 15);
let p2 = new Point(50, 15);
let p3 = new Point(10, 15);
let p4 = new Point(50, 15);
let l1 = new Line(p1, p2, "red");
let l2 = new Line(p3, p4, "red");

// Creating a Graphic2D object
let myGraphic = new Graphic2D();

// Adding lines to the graphic
myGraphic.addLine(l1);
myGraphic.addLine(l2);

// Logging the graphic
console.log(myGraphic);

// Translating the lines
let translatedLine1 = l1.translate(5, 5);
let translatedLine2 = l2.translate(5, 5);

// Logging the translated lines
console.log(translatedLine1);
console.log(translatedLine2);
