//map perform operations and ececutes all values 
const marks=[1,2,3,4,5,6,7,8]
//const myMarks=marks.map( (mrks)=> mrks + 5)
//console.log(myMarks)//[6,7,8,9,10,11,12,13]

//we will do the same for-each loop

marks.forEach( (marks,index,array) =>  {
  
  // array[index] += 5
})
//console.log(marks)//[6,7,8,9,10,11,12,13]


// chaining means use of 2,3 methods simultaneasly
const number1= marks
                 .map((num) => num * 10)
                .map((num) => num +3)  
                .filter( (num) => num >=20)
console.log(number1)//[23, 33, 43,53, 63, 73, 83]