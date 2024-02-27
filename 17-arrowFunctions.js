const user={
    username:"Amir",
price:1244,
welcomeMessage: function(){
console.log('${this.username},welcome to website ')
/*if we console it inside then*/
//console.log(this) 
/*it wil print all current context */
}
  
}
//  user.welcomeMessage() //Amir , welcome to website
// /* this keyword tells about current contex, now if we change the current context from Amir to Rather*/
//  user.username="Rather"
//  user.welcomeMessage()//Rather,welcome to website

//console.log(this) //{} empty bec we are in node environment as there is context in global environment




//ARROW FUNCTION
function study(){
    let username="Amir  Ayoub"
    console.log(this.username)//undefined here we can't use this keyword in function`s it works only in objects
}
study()

/* if we try to write function in this way then*/
 const family=function (){
    let username="Amir  Ayoub"
    console.log(this.username)//undefined here we can't use this keyword in function`s it works only in objects
}
family()



/*Now if we try to write function in this way then*/
const student=() => {  //arrow function
    let username="Amir  Ayoub"
    console.log(this.username)//undefined here we can't use this keyword in function`s it works only in objects
}
student()

/* Now if we use only this in console then */
const read=()=> {
    let username="Amir  Ayoub"
    console.log(this)  //{}
}
read()



/*syntex of arrow function   () => {}, we can use variables to hold its value*/
//basic arrow functions 
const addTwoNumbers= (num1,num2) =>{
    return num1+num2
}
console.log(addTwoNumbers(4,5))


/*implicit return type in this we don't use return*/
//const addTwoNumber= (num1,num2) =>  num1+num2// 9  or we can write it this way
//const addTwoNumber= (num1,num2) =>  (num1+num2)//9 if we wrape it in()then no need of return,if in{} then return is must
/* use of () used above, Now if we have to return an object*/
// const addTwoNumber= (num1,num2) =>  {username:"Amir"}// undefined ,we cant return object in this way 
// console.log(addTwoNumber(4,5))

/*for that we have to wrape {}  in() */
const addTwoNumber= (num1,num2) =>  ({username:"Amir"})// Amir
console.log(addTwoNumber(4,5))




















//explicit return type in type we have to use return
//const addTwoNumber= (num1,num2) =>  num1+num2// 9  or we can write it this way
const addTwoNumberss= (num1,num2) =>  (num1+num2)//9 if we wrape it in()then no need of return,if in{} then return is must
console.log(addTwoNumberss(4,5))




