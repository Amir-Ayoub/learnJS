// console.log('hello world')
// console.log('hey')



// use of const get and var
const accountId= 765643
let accountEmail= "amir123@gmail.com"
var accountPassword="22333445"
var accountCity="Srinagar"
// accountId=4  not allowed 


 accountEmail= "rather23@gmail.com"
 accountPassword="12345"
 accountCity="pulwama";
 let accountState;


//console.log(accountId);

// preferrer not to use var
// because of issue in block scope and functional scope

//console.table([accountId,accountEmail,accountCity,accountState]);


//push is used to insert element at end and pop is used to delete element at end 
// similarlt   unshift inserts element at first  and shift removes first element of the array 

let array=[1,2,3,4];
array.push(5,7);
array.pop();
array.unshift(33)
array.shift();
console.log(array)
