// based on call by value and call by refrence methods memory is diveded in two types => Stack and Heap
/*stack(primitive) gives copy of data  and  heap(non primitive) gives refrence of data*/

//primitive data types are 7: string, Number, Boolean, null, undefined,symbol and bigint.

// let bigint=255677443566796n;



// Refrence(non primitive type) = array,object and functions
// let array=["apple","banana"];

/*let my obj= {
name = amir;
age =22;
}*/

/* const myFunction = function(){
    console.log("hello world")
} */
//primitive example
let name="amir";
//let anothername=name;
let anothername="rather";
// console.log(name);
// console.log(anothername);


//non primitive example ,call by refrence and changes happen in original part
let userOne ={
    email:"rather12@gmail.com",
    password:"13344"

}
let userTwo=userOne;
userTwo.email="amir@1233"
console.log(userOne)
console.log(userTwo)
 

