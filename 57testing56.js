account_details={
    1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},
    1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
    1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
    1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
}

//create a function for validating accountnumber
function validateAccountNumber(accno){
    return accno in account_details?true:false
}

//print password of 1000
// console.log(account_details[1000].password);

function authenticateUser(accno,password){
    if(validateAccountNumber(accno)){
        let pwd=account_details[accno].password
        if(password==pwd){
            return 1;
            // console.log("access granded");
        }else{
            return 0;
            // console.log("invalid password");
        }
    }else{
        return -1;
        // console.log("invalide account_number");
    }

}

console.log(authenticateUser(1000,"usertwo"));

console.log(account_details[1000].transactions);
var details={to:1000,de_amt:100,crt_balance:1000}
account_details[1000].transactions.push(details)
console.log(account_details[1000].transactions);
