var BankAccounts = /** @class */ (function () {
    function BankAccounts(accountNumber, balance) {
        this.AccountNumber = accountNumber;
        this.Balance = balance;
    }
    BankAccounts.prototype.Deposit = function (amount) {
        if (amount > 0) {
            this.Balance += amount;
            console.log("Success add amount: ", amount, "$");
            console.log("Your balance: ", this.Balance, "$");
        }
        else {
            this.Balance = this.Balance;
            console.log("Can't add your amount! Your amoun is 0! and your balance is ", this.Balance);
        }
    };
    BankAccounts.prototype.withDraw = function (amount) {
        if (amount > 0 && amount <= this.Balance) {
            this.Balance -= amount;
            console.log("You have used ", amount, "$");
            console.log("You balance is ", this.Balance, "$");
        }
        else if (amount > this.Balance) {
            this.Balance = this.Balance;
            console.log("You have enough money in your account!");
        }
        else {
            console.log("Can't do the procces!");
        }
    };
    BankAccounts.prototype.getAccountInf = function () {
        return { AccountNumber: this.AccountNumber, Balance: this.Balance };
    };
    return BankAccounts;
}());
var SenrinAccount = new BankAccounts("Senrin0111", 12);
SenrinAccount.Deposit(12);
SenrinAccount.withDraw(12);
console.log(SenrinAccount.getAccountInf());
