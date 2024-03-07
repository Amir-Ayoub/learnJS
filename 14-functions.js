function students(){
    console.log("Amir");
    console.log("Irfan");
    console.log("Shahid");
    console.log("Fazil");
    console.log("Sahil");

}
//students()//fuction exectuion
//students//it is only a refrence and there is nothing is output ,is says is this function their or not



//function to add two numbers;
function addTwoNumbers(number1,numbr2){
    console.log(number1+numbr2)
}
addTwoNumbers(4,7)// 11
// addTwoNumbers(4,-7)// -3
// addTwoNumbers(4,"7")// 47 takes as string
// addTwoNumbers(4,"a")// 4a
// addTwoNumbers(4,null)// 4


//const result=addTwoNumbers(4,5)
//console.log("Result:" ,result)//Result: undefined ,console and returen are different  



// we can write this function in another way
function addTwoNumbers(number1,numbr2){
    let result = number1+numbr2
//     console.log("amir")//before return everythig can be executed
//     return result
//     console.log("amir")//it will never excute because after return nothing executes
}
// const result=addTwoNumbers(4,5)// although it excutes but output not printed
// console.log("Result:" ,result)//Result: 9 ,amir will be printed 2 times bec. one is of console and another of return as it saves the value of result





// we can write this function in another way
function addTwoNumbers(number1,numbr2) {
    return  number1+numbr2
}
//here the scope of result is outside the function

// const result=addTwoNumbers(4,5)// although it excutes but output not printed
// console.log("Result:" ,result)//Result: 9



function userLoginMessage(username){
    return `$(username) just logged in`
}
//userLoginMessage("Amir")//it executes but value not printed bec it returns the value but not said to store in a variable, or to print for that we do
// console.log(userLoginMessage("Amir"))//Amir just logged in
// console.log(userLoginMessage(""))//  just logged in
// console.log(userLoginMessage())// undefined just logged in,to overcome this problem we use if else statement



function userLoginMessage(username){
    if(username===undefined){//this will execute when the condition is true
        console.log("Please enter username");
        return
        
    }
    return `$(username) just logged in`
}
// console.log(userLoginMessage("Amir"))
// console.log(userLoginMessage())//undefined



//we can write the same in another way

function userLoginMessage(username){
    if(!username){//if not equal to username then it will print this 
        console.log("Please enter username");
        return
        
    }
    return `$(username) just logged in`
}
//console.log(userLoginMessage("Amir"))
// console.log(userLoginMessage())//undefined


//we can put by default username ,if username not given by the user
function userLoginMessage(username="Rather"){
    if(!username){//if not equal to username then it will print this 
        console.log("Please enter username");
        return
        
    }
    return `$(username) just logged in`
}
console.log(userLoginMessage("Amir"))
console.log(userLoginMessage())//undefined