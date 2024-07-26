class Man {
    leftArm: Arm = new Arm(true);  // Set isLeft to true for the left arm
    rightArm: Arm = new Arm(false); // Set isLeft to false for the right arm
}

class Arm {
    isLeft: boolean;

    constructor(isLeft: boolean){
        this.isLeft = isLeft;
    }
}

// Create an instance of the Man class
const man = new Man();

// Access the properties of the man object
console.log("Left Arm:", man.leftArm.isLeft);  // Output: Left Arm: true
console.log("Right Arm:", man.rightArm.isLeft); // Output: Right Arm: false
