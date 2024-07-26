var Vehicle = /** @class */ (function () {
    function Vehicle(name, speed, mileAge) {
        this.color = "White";
        this.name = name;
        this.speed = speed;
        this.mileAge = mileAge;
    }
    return Vehicle;
}());
var vehicle = new Vehicle("Toyota", 120, 12000);
console.log(vehicle);
// =======================================
var Numbers = /** @class */ (function () {
    function Numbers(a, b) {
        this.a = a;
        this.b = b;
    }
    Numbers.prototype.getSquare = function () {
        return new Numbers(Math.pow((this.a), 2), Math.pow((this.b), 2));
    };
    return Numbers;
}());
var obj = new Numbers(2, 3);
console.log('a=' + obj.getSquare().a + ', b=' + obj.getSquare().b);
// =====================================
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var kitchen = new Rectangle(4, 5);
var beroom = new Rectangle(5, 6);
var classroom = new Rectangle(8, 9);
var total = kitchen.getArea() + beroom.getArea() + classroom.getArea();
console.log(total);
// =================================================
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.address = [];
    }
    Student.prototype.getAddress = function (Address) {
        this.address.push(Address);
    };
    return Student;
}());
var Address = /** @class */ (function () {
    function Address(city, street, country) {
        this.city = city;
        this.street = street;
        this.country = country;
    }
    return Address;
}());
var student01 = new Student("Sok Seyha");
var address01 = new Address("Phnom Penh", "Norodom Blvd", "Cambodia");
student01.getAddress(address01);
console.log(student01);
