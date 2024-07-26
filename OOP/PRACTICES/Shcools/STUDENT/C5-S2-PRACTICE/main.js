var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width, height, size) {
        var _this = _super.call(this) || this;
        _this.leftX = width;
        _this.bottomY = height;
        _this.size = size;
        return _this;
    }
    Square.prototype.getWidth = function () {
        return this.leftX * this.size;
    };
    Square.prototype.getHeight = function () {
        return this.bottomY * this.size;
    };
    Square.prototype.getArea = function () {
        return this.getWidth() * this.getHeight();
    };
    return Square;
}(Shape));
var square = new Square(23, 54, 23);
console.log(square.getWidth());
