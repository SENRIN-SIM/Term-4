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
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    person.prototype.setPerson = function (name, age) {
        this.name = name;
        this.age = age;
    };
    return person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        return _super.call(this, name, age) || this;
    }
    return Student;
}(person));
var student = new Student("Senrin", 12);
// let personS = new Student("Senrin", 12);
student.setPerson("lsdf", 12);
console.log(student);
