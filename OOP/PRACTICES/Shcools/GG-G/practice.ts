abstract class  Persons {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    abstract getFullName(): string;
}

class Employes extends Persons {
    private salary: number;
    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    getFullName(): string {
        return `${this.name} (${this.age})`;
    }
}

