var Man = /** @class */ (function () {
    function Man() {
        this.leftArm = new Arm(true); // Set isLeft to true for the left arm
        this.rightArm = new Arm(false); // Set isLeft to false for the right arm
    }
    return Man;
}());
var Arm = /** @class */ (function () {
    function Arm(isLeft) {
        this.isLeft = isLeft;
    }
    return Arm;
}());
// Create an instance of the Man class
var man = new Man();
// Access the properties of the man object
console.log("Left Arm:", man.leftArm.isLeft); // Output: Left Arm: true
console.log("Right Arm:", man.rightArm.isLeft); // Output: Right Arm: false
