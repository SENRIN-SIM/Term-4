enum Gender{
    F = "Women",
    M = "Men"
}
enum Major{
    Web = "Web",
    SNA = "SNA",
}
enum Topic{
    JS = "JAVASCRIPT",
    HTML = "HTML",
    VUE = "VUE",
    PHP = "PHP",
    TS = "TS"
}

class Student {
    private name: string;
    private gender: Gender[];
    private major: Major[];

    constructor(name: string){
        this.name = name;
        this.gender = [];
        this.major = [];
    }

    addMajor(major: Major){
        this.major.push(major);
    }
    addGender(gender: Gender){
        this.gender.push(gender);
    }

}

class Result {
    private score: number;
    private student: Student[] = [];;
    private topic: Topic[];

    constructor(score: number){
        this.score = score;
        this.student = [];
        this.topic = [];
    }   

    addStudent(student: Student){
        this.student.push(student);
    }
    addTopic(topic: Topic){
        this.topic.push(topic);
    }
}

// the below code fragment can be found in:
let student1 = new Student('Sernin')
let result1 = new Result(100)

student1.addGender(Gender.F)
student1.addMajor(Major.Web)

result1.addStudent(student1)
result1.addTopic(Topic.JS)

console.log(result1)


