var Persons = /** @class */ (function () {
    function Persons(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    Persons.prototype.getName = function () {
        return this.name;
    };
    Persons.prototype.getYearOfBirth = function () {
        return this.yearOfBirth;
    };
    return Persons;
}());
var Calendar = /** @class */ (function () {
    function Calendar() {
    }
    Calendar.prototype.getCurrentDate = function () {
        return new Date();
    };
    Calendar.prototype.getMonthDayYear = function (date) {
        var month = date.getMonth() + 1; // Months are zero-indexed, so add 1
        var day = date.getDate();
        var year = date.getFullYear();
        return { month: month, day: day, year: year };
    };
    Calendar.prototype.getAgeOfPerson = function (birthPerson, currentYear) {
        return currentYear - birthPerson;
    };
    return Calendar;
}());
//Example Person inf
var Person_1 = new Persons("Senrin", 2003);
var Person_2 = new Persons("Sarey", 2004);
console.log(Person_1.getName());
console.log(Person_1.getYearOfBirth());
// Example currentDate
var calendar = new Calendar();
var currentDate = calendar.getCurrentDate();
var _a = calendar.getMonthDayYear(currentDate), month = _a.month, day = _a.day, year = _a.year;
console.log("Month: ".concat(month, ", Day: ").concat(day, ", Year: ").concat(year));
console.log(calendar.getAgeOfPerson(Person_1.getYearOfBirth(), year));
console.log(calendar.getAgeOfPerson(Person_2.getYearOfBirth(), year));
