// type bankAccount = {
//   balance: number,
//   name: string
// }

// function debit(account: bankAccount, valueDollar:number){
//   // TODO
//   let yourmoney = account.balance + valueDollar;
//   return yourmoney;
// }

// function credit(account: bankAccount, valueDollar:number){
//   //TODO
//   let payment = account.balance - valueDollar
//   return payment
// }
// let bankAcc:bankAccount = {balance:12345, name:"Senrin"}
// debit(bankAcc, 10);
// credit(bankAcc, 34); 


class bankAccount{
  name: string;
  balence: number;

  constructor(name: string, balence: number){
    this.name = name;
    this.balence = balence;
  } 

  debit(value: number){
    this.balence += value
  }
}


let myAcc = new bankAccount("Senrin", 1)
myAcc.debit(123)

let KKK = new bankAccount("SD", 1)