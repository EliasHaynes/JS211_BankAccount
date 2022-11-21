// 'use strict'
// const assert = require("assert");
// // brings in the readline module to access the command line
// const readline = require("readline");
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


class BankAccount {
    constructor(accountNum,owner) {
    this.accountNum = accountNum;
    this.owner = owner;
    this.transactions = []; // This will be an array containing an object with details about transactions date, how much, and who
    }
    balance() {
      //use .reduce() to add all transactions up and then .push() to push it into the transactions empty array
      let sum = 0;
      for (let i =0; i < this.transactions.length; i++) {
            sum += this.transactions[i].amount;
        }
        return sum;
    }
    
    deposit(amt) {
      //Promt for an numeric amount? or do i have to do some DOM work? But definitely then push it into transactions array (NO -#'s)
      
      if (amt <0) {
        return;
      }
      const transaction = new Transactions(amt)
      this.transactions.push(transaction)
    }
    
    charge(amt,payee) {
      let currentBalance = this.balance();
      if (amt <= currentBalance){
        
        let charge = new Transactions(-amt, payee);
        this.transactions.push(charge);
    }
      //Prompt for string payee and then amt. Make the payee & amt its own object together since its a
      
    }
  }
  
  
  
  
class Transactions {
    constructor(amount,payee) {
      this.amount = amount;
      this.payee = payee;
      this.date = new Date();
      //We use super() in child classes because it grabs the this. statements we make in the parent class
    }
  }



//Tests ***************
let one = new BankAccount('12345','Elias Haynes');
  //Test 1: Check if account initialized correctly
  console.log("Check accountNum:", one.accountNum)
  console.log("Check owner:", one.owner)
  console.log("Transactions length Check:", one.transactions.length)
  console.log("Check if balance is 0:", one.balance())
  console.log("Overall look into transactions:", one.transactions);

  //Test 2: Check if transaction initialied correctly
let two = new Transactions(50, 'Deposit')
console.log("Does amount = 50?:",two.amount)
console.log("Does payee = Deposit?:",two.payee)
console.log("Does Date have a value?:",two.date)


//Test 3: Check Transaction methods work correctly
one.deposit(100);
console.log("Did the Deposit add 100 to the balance?:", one.balance())
one.charge(20,"HEB")
console.log("Does the balance = 80 after a charge of 20 from 100?:", one.balance())

//Test 4: Charge does not allow overdraft (If the deposit method is not working which this code is dependent on then it will be incorrect results for tests)
one.deposit(20)
console.log("Balance should be reset to 100:", one.balance())
one.deposit(-30);
console.log("Incorrectly trying to deposit negative amount should not affect the balance and should still be at 100:",one.balance())
one.charge(110, "Walmart");
console.log("You should not be able to overdraw so charging 110 from 100 should block the transaction leaving it at 100:", one.balance())
