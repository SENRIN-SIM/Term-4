var Cars = /** @class */ (function () {
    function Cars() {
        this.speed = 0;
    }
    // Getter method for speed
    Cars.prototype.getSpeed = function () {
        return this.speed;
    };
    // Setter method for speed
    Cars.prototype.setSpeed = function (speed) {
        if (speed >= 0) {
            this.speed = speed;
        }
        else {
            console.log("Speed must be a positive number.");
        }
    };
    // Method to accelerate
    Cars.prototype.accelerate = function () {
        this.speed += 10;
    };
    // Method to brake
    Cars.prototype.brake = function () {
        if (this.speed >= 10) {
            this.speed -= 10;
        }
        else {
            this.speed = 0;
        }
    };
    return Cars;
}());
// Create a new car object
var myCars = new Cars();
// Accessing and modifying speed using getter and setter methods
console.log("Current Speed:", myCars.getSpeed()); // Output: 0
myCars.setSpeed(50);
console.log("Current Speed:", myCars.getSpeed()); // Output: 50
// Trying to set negative speed
myCars.setSpeed(-20); // Output: Speed must be a positive number.
// Accelerate and brake
myCars.accelerate();
console.log("Current Speed:", myCars.getSpeed()); // Output: 60
myCars.brake();
console.log("Current Speed:", myCars.getSpeed()); // Output: 50
