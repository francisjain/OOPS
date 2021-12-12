class Bank{
    createAccount(acno,p_name,ac_type,balance){
        this.name=p_name
        this.acno=acno,
        this.ac_type=ac_type,
        this.balance=balance
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`ur accnt ${this.acno} has been credited with ${amount} crnt balance ${this.balance}`);       
    }

    withdrawal(amount){
        if(amount>this.balance){console.log("insufficient balance");}
        else{
            this.balance-=amount
            console.log(`ur accnt ${this.acno} has been debited with ${amount} crnt balance ${this.balance}`);  
        }
             
    }

    balanceEnquiry(){console.log(`Your Current balance ${this.balance}`);}
}

var obj = new Bank()
obj.createAccount(1000,"jain","saving",1000)
obj.deposit(2000)
obj.withdrawal(2100)

var obj1 = new Bank()
obj1.createAccount(1001,"jelin","current",5000)
obj1.deposit(2000)
obj1.withdrawal(2100)