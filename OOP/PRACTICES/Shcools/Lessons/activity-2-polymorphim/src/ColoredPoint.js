"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColoredPoint = void 0;
var Point_1 = require("./Point");
var ColoredPoint = /** @class */ (function (_super) {
    __extends(ColoredPoint, _super);
    function ColoredPoint(x, y, color) {
        var _this = _super.call(this, x, y) || this;
        _this.color = color;
        return _this;
    }
    /**
     * @returns information about the colored point
     */
    ColoredPoint.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + " colors" + this.color; // TODO : must get the info from point and add the color
    };
    return ColoredPoint;
}(Point_1.Point));
exports.ColoredPoint = ColoredPoint;
