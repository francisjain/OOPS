class Bank {
    session = {}
    account_details = {
        1000: { account_number: 1000, balance: 3000, password: "userone", transactions: [] },
        1001: { account_number: 1001, balance: 2000, password: "usertwo", transactions: [] },
        1002: { account_number: 1002, balance: 4000, password: "userthree", transactions: [] },
        1003: { account_number: 1003, balance: 5000, password: "userfour", transactions: [] }
    }

    registration(account_number, balance, password){
        if(this.validateAccountNumber(account_number)){console.log("invalide");}
        else{
            this.account_details[account_number]={
                account_number:account_number, balance:balance, password:password, transactions:[]
            }
            console.log("account created sucess");
        }
    }


    validateAccountNumber(accno) {
        //return true if exit else invalide
        //if (accno in this.account_details) { return true } else { return false }
        return accno in this.account_details ? true : false
    }
    authenticate(accno, password) {
        if (this.validateAccountNumber(accno)) {

            let pwd = this.account_details[accno].password
            if (password == pwd) { return 1; }//access granded
            else { return 0; }// invalid password
        }
        else { return -1 }//invalide accno

    }
    login(acno, password) {
        let user = this.authenticate(acno, password)
        if (user == 1) {
            this.session["user"] = acno
            // console.log(this.session);
        }
        else { console.log("access denied"); }
    }
    getBalance(acno) { return this.account_details[acno].balance }
    balanceEnquiry() {
        if ("user" in this.session) {
            // let logged_user = this.session["user"]
            // let aval_balance = this.account_details[logged_user].balance
            // console.log(aval_balance);
            let logged_user = this.session["user"]
            let aval_balance = this.getBalance(logged_user)
            console.log(aval_balance);

        }
    }


    logOut() {
        if ("user" in this.session) {
            delete this.session["user"]
        } else { console.log("u must login fast"); }
    }

    tranHis(acno) { return this.account_details[acno].transactions }
    payementHistory(){
        let logged_user=this.session["user"]
        let tran=this.account_details[logged_user].transactions
        console.log(tran);
    }

    fundTransfer(to_cno, amount, confirm_toacno) {
        if ("user" in this.session) {
            if (to_cno == confirm_toacno) {
                if (this.validateAccountNumber(to_cno)) {
                    let loged_user_acno = this.session["user"]
                    let avl_bal = this.getBalance(loged_user_acno)
                    if (amount > avl_bal) {
                        console.log("insufficient amount");
                    }
                    else {
                        this.account_details[loged_user_acno].balance -= amount
                        this.account_details[to_cno].balance += amount
                        let bal = this.getBalance(loged_user_acno)
                        let crd_bal = this.getBalance(to_cno)
                        console.log(`ur accnt ${loged_user_acno} has been debited with amount ${amount} and crnt balance ${bal}`);

                        let dhis = { to: to_cno, de_amt: amount, crt_balance: bal }
                        let chis = { from: loged_user_acno, ce_amt: amount, crt_balance: crd_bal }
                        this.tranHis(loged_user_acno).push(dhis)
                        this.tranHis(to_cno).push(chis)

                        //console.log(this.tranHis(loged_user_acno), this.tranHis(to_cno));


                        // let credited_bal=this.getBalance(to_cno)+amount
                        // console.log(credited_bal);

                    }



                } else {
                    console.log("to acno doesnt exist");
                }

            } else {
                console.log("mismatch");
            }

        } else {
            console.log("login first");
        }
    }
}

var obj = new Bank()
obj.login(1003, "userfour");
obj.balanceEnquiry();
obj.fundTransfer(1000, 200, 1000)
obj.fundTransfer(1001, 214, 1001)
obj.fundTransfer(1002, 198, 1002)
obj.payementHistory()
obj.logOut()


// var obj = new Bank()
// obj.registration(1005, "userfive");
// obj.payementHistory()