"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.isEqual = function (other) {
        if (this.x === other.x && this.y === other.y) {
            return true;
        }
        else {
            return false;
        } // TODO  !!
    };
    return Point;
}());
exports.Point = Point;
var p1 = new Point(10, 20);
var p2 = new Point(10, 20);
var p3 = new Point(88, 88);
console.log(p1 === p2); // should be false
console.log(p1.isEqual(p2)); // should be true
console.log(p1.isEqual(p3)); // should be false
