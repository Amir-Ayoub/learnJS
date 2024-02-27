//local and global scope in js,let var and const
// let and var has local/block level scope and var has global scope

if (true){
    let a=10
    const b=20
    var c = 30
   // console.log(a)//10 block scope
}
//console.log(a)  //can't be executed bec. it has local scope
//console.log(b)  //can't be executed bec. it has local scope
//console.log(c) //output is 30 bec var has global scope


//scope inside a nested function
function name(){
    const userfirstname="Amir"
    
    function lastname(){
        const lastname="Rather"
        console.log(userfirstname)//we can console parent function inside the child function

    }
     // console.log(lastname) //we can't console a child function outside the funtion, scope is limited within the function
    lastname()  //we have call the function bec what we  console is in it
   }
     name()


     //we can do the same using if else
     if(true){
        const username="Amir"
        if(username=="Amir"){
            const lastname=" Rather"
            console.log(username+" Ayoub"+lastname)//we can access parent  in child 
        }
       // console.log(lastname)  // last name has a local scope and can't be accessed ouside the class
     }
    // console.log(username)  //username has a local scope and can't be accessed ouside the class




    //************** POINTS TO REMEMBER WHILE DECLEARING A FUNCTION *********
    function first(num){
        return num+1
    }
    console.log(first(7))// 8,simply we put num=7
    
    /*  what will happen if console before the funcion decleration */
    console.log(first(7))// 8,simply we put num=7, in this case we can put it in both positions
    function first(num){
        return num+1
    }

    /*but what will happen if we store a fuction in a variable */
    const add=function(num){
        return num+2
    }
    console.log(add(7))// 9,simply we put num=7

    /*  what will happen if console before the funcion decleration */
    // console.log(add2(7))// when the value of a function is contained in a variable,that time we can't console before the function decleration
    // const add2=function(num){
    //     return num+2
    // }