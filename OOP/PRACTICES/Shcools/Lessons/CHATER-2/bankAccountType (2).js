type bankAccount = {
  balance: number,
  name: string
}
function debit(account: bankAccount, valueDollar:number){
  // TODO
  let yourmoney = account.balance + valueDollar;
  return yourmoney;
}
function credit(account: bankAccount, valueDollar:number){
  //TODO
  let payment = account.balance - valueDollar
  return payment
}
let bankAcc:bankAccount = {balance:12345, name:"Senrin"}
debit(bankAcc, 10);
credit(bankAcc, 34); 
var bankAccount = /** @class */ (function () {
    function bankAccount(name, balence) {
        this.name = name;
        this.balence = balence;
    }
    bankAccount.prototype.debit = function (value) {
        this.balence += value;
    };
    return bankAccount;
}());
var myAcc = new bankAccount("Senrin", 1);
myAcc.debit(123);
console.log(myAcc);
var KKK = new bankAccount("SD", 1);
console.log(KKK);
