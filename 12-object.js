/*singleton:are classes which can be instanced once,and can be accessed globally
if we develop through LITERALS then singleton is not formed*/
//if created by => object.create   then singleton is formed



// object literals
const mySymbol= Symbol("key1")//symbol is decleared in this way

const user={
    name:"Amir",
    "full Name":"Amir Ayoub",
    [mySymbol]:"key1",//square brakets make it symbol otherwise it takes it as  string
    age: 22 ,
    email:"rather122@gmail.com",
    isLoggedIn :false,
    lastLoginDays:["Monday","Saturday"]


}
// console.log(user.email)//old way,rather122@gmail.com
// console.log(user["email"])  //rather122@gmail.com
// //console.log(user.full Name)  can"t be printed with dot method
// console.log(user["full Name"]) //Amir Ayoub

// console.log(user[mySymbol])//key1
// console.log(typeof mySymbol)//symbol


//to change value 
user.email="aamir1223@gmail.com"
//console.log(user)//email: 'aamir1223@gmail.com',
//Object.freeze(user)//after freez we can"t update anything
user.email="aamirayoub1223@gmail.com"
//console.log(user)//  email: 'aamir1223@gmail.com', can't update it



//add functions
user.greeting=function() {
   // console.log("Hello")
}
//console.log(user.greeting)//undefined
//console.log(user.greeting())


user.greetingtwo=function() {
    //console.log('Hello, ${this.name}')
}
//console.log(user.greetingtwo())







//singleton

//const tinderUser= new Object()//singleton object 
//console.log(tinderUser)// empty object=>{}
const tinderUser ={} //non singleton object
tinderUser.id="12345"
tinderUser.name="Amir"
tinderUser.isLoggedIn=false
//console.log(tinderUser)//{ id: '12345', name: 'Amir', isLoggedIn: false }


//nested object
const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Amir Ayoub",
            lastname:"Rather",
}}}

// console.log(regularUser.fullname)//{ userfullname: { firstname: 'Amir Ayoub', lastname: 'Rather' } }
// console.log(regularUser.fullname.userfullname.lastname)//=> Rather

// merje objects
const objectOne={1:"amir", 2:"rather"}
const objectTwo={3:"from", 4 :"India"}
//const objectthree={objectOne,objectTwo}//will not merge it excately
//console.log(objectthree)
/*output is => {
  objectOne: { '1': 'amir', '2': 'rather' },
  objectTwo: { '3': 'from', '4': 'India' }
}
*/
const objectthree=Object.assign(objectOne ,objectTwo)//old way
//console.log(objectthree)//{ '1': 'amir', '2': 'rather', '3': 'from', '4': 'India' }

//new way to merge
const object3={...objectOne,...objectTwo}
// console.log(object3)//{ '1': 'amir', '2': 'rather', '3': 'from', '4': 'India' }




//if the values are from from database example
const users=[//if having array wth multiple objects
   { id:1, 
    email:"abcfd@gmail.com",
   },
   { id:2, 
    email:"abcgd@gmail.com",
   },
   { id:3, 
    email:"abckd@gmail.com",
   }
]
users[1].email
//console.log(tinderUser)//{ id: '12345', name: 'Amir', isLoggedIn: false }


//if have need of all keys ,of what we put them in braces eg tinderuser
// console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn' ] =>array type
// console.log(Object.values(tinderUser))//[ '12345', 'Amir', false ]

//array inside array key value changed to array
//console.log(Object.entries(tinderUser))//[ [ 'id', '12345' ], [ 'name', 'Amir' ], [ 'isLoggedIn', false ] ]


//if we have to check that the following property lies in a object or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true
console.log(tinderUser.hasOwnProperty('isLogged'))//false


