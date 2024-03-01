const age=10
if(age>=18){
    console.log('eligible for vote')
}
else{
    console.log('you are not eligible for vote')
}



/*scope of variable in if is within the {} so we cann't console that variable outside {}  */
const price=1999
if(price != 12999){
    const product='laptop'
    console.log('not equal to given price of,${product}')
}
console.log('not equal to given price of,${product}')


//implicit scope means we don't use {}and put the code in single line and put , after each console log
const temperature=30
if(temperature>29) console.log("use fan"),  //use fan
console.log("use AC")    //use AC,,but this is not good way to code


/////NESTEING if 
const  balance=590
if(balance>600){
    console.log("you can take your atm card")
}
else if(balance<600){
    console.log("you can't take the atm card ")
}
else if (balance==600 ){
    console.log("you can take the atm card")
}
else{
    console.log("problem in your account")
}


// check all the conditions 
const userLoggedIn = true
const debitCard =true
 if(userLoggedIn && debitCard){
    console.log("eligible for online shopping")//in this case it will check the both conditions ond if both conditions are true then console will be executed 
 }


 //  && is used to check both the conditions are true and  || used to check atleast one should be true
 const userAge=28
 const userHavingAdharCard=true
 const userHavingELectionCard=false
 if(userAge>20 && userHavingAdharCard || userHavingELectionCard){
    console.log("user eligible for vote")
 }