//filter basically checks whether condition  is true or false
// const names=["Amir","Irfan","Masood","Shahid"]
//  const friends=names.forEach( (item) => {
//   console.log(item)//Amir,Irfan,Masood,Shahid
//  })
//  console.log(friends)//returns undefined

const numbers=[1,2,3,4,5]
// numbers.filter( (num) => num > 2 )
// console.log(num)// num is not defined, put them in variable e'g num1
 const num1=numbers.filter( (num) => num > 2 )//call back function inside filter
 //console.log(num1)   //   [ 3, 4, 5 ]
 

 //we can write the above code in another way
 const num2=numbers.filter( (item) =>  {
   return item > 2 // {} indicates scope that is why we need to firts return otherwise it prints empty array[]
 } )
  //console.log(num2)


  // we do the same by using for-each loop
  const num3=[]
  numbers.forEach( (item) => {
    if(item > 2){
        num3.push(item)
    }

  })
//console.log(num3) // [ 3, 4, 5 ]

// more use of filter
const friends =[
    {name:'Amir',address:'pulwama',marks:'70%'},
    {name:'Amir',address:'srinagar',marks:'60%'},
    {name:'Irfan',address:'pulwama',marks:'70%'},
    {name:'Irfan',address:'shopain',marks:'90%'},
    {name:'Sahil',address:'Shopain',marks:'70%'},
    {name:'Sahil',address:'pulwama',marks:'80%'},
    {name:'Shahid',address:'Shopain',marks:'70%'},
    {name:'Fazil',address:'Kupwara',marks:'80%'},
];
// const friend=friends.filter( (frd) => frd.address==="pulwama")
// console.log(friend) //returns all names having pulwama as address 
                    /*[
                      { name: 'Amir', address: 'pulwama', marks: '70%' },
                     { name: 'Irfan', address: 'pulwama', marks: '70%' },
                     { name: 'Sahil', address: 'pulwama', marks: '80%' }
                       ] */
                      
// const friend1=friends.filter( (frd) => {return frd.marks>'70%'})
// console.log(friend1)//Irfan,Sahil, Fazil
           

 // we can use multiple filter also
 const friend3=friends.filter( (frd) => frd.address==="pulwama" && frd.marks > '70%')
console.log(friend3)// [ { name: 'Sahil', address: 'pulwama', marks: '80%' } ]

