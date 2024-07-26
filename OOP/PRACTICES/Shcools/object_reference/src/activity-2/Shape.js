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
        return true; //TODO !!
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
        return true; //TODO !!
    };
    return Line;
}());
var p1 = new Point(10, 15);
var p2 = new Point(10, 15);
var p3 = new Point(10, 15);
var p4 = new Point(10, 15);
var l1 = new Line(p1, p2, "red");
var l2 = new Line(p3, p4, "red");
console.log(l1.isEqual(l2));
