var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * @param other the other point
     * @returns true if the given point is equal to current point
     */
    Point.prototype.isEqual = function (other) {
        return this.x === other.x && this.y === other.y;
    };
    return Point;
}());
var Line = /** @class */ (function () {
    function Line(point1, point2, color) {
        this.point1 = point1;
        this.point2 = point2;
        this.color = color;
    }
    Line.prototype.isEqual = function (other) {
        return (this.color === other.color &&
            this.point1.isEqual(other.point1) &&
            this.point2.isEqual(other.point2));
    };
    return Line;
}());
var Graphic2D = /** @class */ (function () {
    function Graphic2D() {
        this.lines = [];
    }
    Graphic2D.prototype.contains = function (newLine) {
        // TODO :  return True if this line is already on the graphic, false otherwise
        this.lines.forEach(function (line) {
            if (line.point1 === newLine.point1 && line.point2 === newLine.point2 && line.color === newLine.color) {
                return true;
            }
            else {
                return false;
            }
        });
        // return false;
    };
    Graphic2D.prototype.addLine = function (newLine) {
        var _this = this;
        this.lines.forEach(function (line) {
            if (line === null) {
                _this.lines.push(newLine);
            }
            if (line !== newLine) {
                _this.lines.push(newLine);
                return _this.lines;
            }
            else {
                return false;
            }
        });
        // TODO :  return add the line ONLY if the new line is NOT on th graphic2D
    };
    return Graphic2D;
}());
var p1 = new Point(10, 15);
var p2 = new Point(50, 15);
var p3 = new Point(10, 15);
var p4 = new Point(50, 15);
var l1 = new Line(p1, p2, "red");
var l2 = new Line(p3, p4, "red");
var myGraphic = new Graphic2D();
myGraphic.addLine(l1);
// myGraphic.addLine(l2);		// should not be added
console.log(myGraphic); // only l should be here
