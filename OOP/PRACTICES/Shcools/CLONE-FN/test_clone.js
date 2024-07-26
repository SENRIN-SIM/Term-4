var Point = /** @class */ (function () {
    function Point(x, y) {
    }
    Point.prototype.translateX = function (deltaX) {
        return new Point(this.x + deltaX, this.y);
    };
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    return Point;
}());
var p1 = new Point(10, 20);
var p2 = p1.clone();
var p3 = p1.translateX(50);
console.log(p1);
console.log(p3);
