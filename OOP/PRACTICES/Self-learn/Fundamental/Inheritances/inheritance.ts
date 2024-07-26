// Base Class (Superclass)
class Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}

//subclass (childclass)
class Dog extends Animal {
  constructor(name: string) {
    super(name); // Call the constructor of the superclass
  }

  wagTail(): void {
    console.log(`${this.name} wags its tail`);
  }
}

let dog = new Dog("Buddy");
dog.speak(); // Outputs: Buddy barks
dog.wagTail(); // Outputs: Buddy wags its tail
