// Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
  }
  withdraw(amount) {
    this.balance = this.balance - amount;
  }
  displayBalance() {
    console.log(this.balance);
  }
}
const myAccountObject = new BankAccount(20000, "Somil");

myAccountObject.deposit(20000);
myAccountObject.displayBalance();
