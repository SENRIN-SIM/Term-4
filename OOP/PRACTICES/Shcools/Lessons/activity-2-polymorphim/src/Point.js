"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * @returns information about the point
     */
    Point.prototype.getInfo = function () {
        return "position x=" + this.x + " y=" + this.y;
    };
    return Point;
}());
exports.Point = Point;
