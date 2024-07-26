// class Cars {
//     private speed: number; // private attribute

//     constructor() {
//         this.speed = 0;
//     }

//     // Getter method for speed
//     getSpeed(): number {
//         return this.speed;
//     }

//     // Setter method for speed
//     setSpeed(speed: number): void {
//         if (speed >= 0) {
//             this.speed = speed;
//         } else {
//             console.log("Speed must be a positive number.");
//         }
//     }

//     // Method to accelerate
//     accelerate(): void {
//         this.speed += 10;
//     }

//     // Method to brake
//     brake(): void {
//         if (this.speed >= 10) {
//             this.speed -= 10;
//         } else {
//             this.speed = 0;
//         }
//     }
// }

// // Create a new car object
// let myCars = new Cars();

// // Accessing and modifying speed using getter and setter methods
// console.log("Current Speed:", myCars.getSpeed()); // Output: 0
// myCars.setSpeed(50);
// console.log("Current Speed:", myCars.getSpeed()); // Output: 50

// // Trying to set negative speed
// myCars.setSpeed(-20); // Output: Speed must be a positive number.

// // Accelerate and brake
// myCars.accelerate();
// console.log("Current Speed:", myCars.getSpeed()); // Output: 60
// myCars.brake();
// console.log("Current Speed:", myCars.getSpeed()); // Output: 50

// ==========back-account==================

class BankAccount {
    private accountNumber: string; // Private property to store the account number
    private balance: number; // Private property to store the balance

    // Constructor to initialize the account number and balance
    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    // Method to deposit funds into the account
    deposit(amount: number): void {
        if (amount > 0) { // Ensure amount is positive
            this.balance += amount; // Add the deposited amount to the balance
            console.log(`Deposited ${amount} into account ${this.accountNumber}`);
        } else {
            console.log('Deposit amount must be greater than zero.');
        }
    }

    // Method to withdraw funds from the account
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) { // Ensure withdrawal amount is positive and does not exceed balance
            this.balance -= amount; // Deduct the withdrawal amount from the balance
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
        } else {
            console.log('Invalid withdrawal amount or insufficient funds.');
        }
    }

    // Method to get account information (account number and balance)
    getAccountInfo(): { accountNumber: string, balance: number } {
        return { accountNumber: this.accountNumber, balance: this.balance };
    }
}

// Example usage
const myAccount = new BankAccount('123456789', 1000); // Create a new bank account


myAccount.deposit(500); // Deposit 500 into the account
myAccount.withdraw(200); // Withdraw 200 from the account
console.log(myAccount.getAccountInfo()); // Print account information
