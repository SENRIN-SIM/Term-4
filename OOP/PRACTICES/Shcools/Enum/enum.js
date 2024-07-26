var Gender;
(function (Gender) {
    Gender["F"] = "Women";
    Gender["M"] = "Men";
})(Gender || (Gender = {}));
var Major;
(function (Major) {
    Major[Major["Web"] = 0] = "Web";
    Major[Major["SNA"] = 1] = "SNA";
})(Major || (Major = {}));
var Topic;
(function (Topic) {
    Topic["JS"] = "JAVASCRIPT";
    Topic["HTML"] = "HTML";
    Topic["VUE"] = "VUE";
    Topic["PHP"] = "PHP";
    Topic["TS"] = "TS";
})(Topic || (Topic = {}));
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.gender = [];
        this.major = [];
    }
    Student.prototype.addMajor = function (major) {
        this.major.push(major);
    };
    Student.prototype.addGender = function (gender) {
        this.gender.push(gender);
    };
    return Student;
}());
var Result = /** @class */ (function () {
    function Result(score) {
        this.student = [];
        this.score = score;
        this.student = [];
        this.topic = [];
    }
    ;
    Result.prototype.addStudent = function (student) {
        this.student.push(student);
    };
    Result.prototype.addTopic = function (topic) {
        this.topic.push(topic);
    };
    return Result;
}());
// the below code fragment can be found in:
var student1 = new Student('Sernin');
var result1 = new Result(100);
student1.addGender(Gender.F);
student1.addMajor(Major.Web);
result1.addStudent(student1);
result1.addTopic(Topic.JS);
