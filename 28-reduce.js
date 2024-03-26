/* inital value=0
(accumulator,currentValue) => accumulator + currentValue
accumulator takes first value as initial value and currentValue takes first value from given data set and perform
addition then that output goes to accumulator and currentValue takes second value from dataset and do the the same process
untill all elements of data set are executed and the last result is printed */

const myMarks=[1, 2, 3, 4]
const totalMarks=myMarks.reduce(function (acc,currval){
   // console.log(`acc: ${acc} and currva: ${currval}`) //this shows how the execution is actully happened
return acc +currval
},0) // 0 as initial value
console.log(totalMarks); // 10

// now if we put initial value = 4 then out put is
//console.log(totalMarks); // 14


//how to write the same through arrow function
const total=myMarks.reduce( ( acc,curr) => acc +curr,0)// 0 is initial value
console.log(total)


const shoppingCart=[
     {  itemName:"js course",
      price : 1234},
      { itemName:"pyhthon course",
      price : 1456}, 
      { itemName:"php course",
      price : 10000},
]
const totalCost=shoppingCart.reduce( (acc,item) =>acc + item.price,0)
console.log(totalCost)//  12690




