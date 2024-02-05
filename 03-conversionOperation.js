let score= "66";
console.log(score)//output is string =66
console.log(typeof score)// string
//now if we want this output as number then do
let ValueInNumber= Number(score)
console.log(typeof ValueInNumber)//output is number
/*now if we do investigation study for that put score = "66afd"(not a pure number),
which can't be changed to number for that*/
console.log(ValueInNumber);//hence  output is NaN ,which proves it can be converted but in actual that not changes


// let score =null;
//console.log(typeof score)// object
/*now if we want this output as number then do
  let ValueInNumber= Number(score)
  console.log(typeof ValueInNumber)//output is number*/
//console.log(ValueInNumber); output is 0 fault in js


// let score =undefined;
//console.log(typeof score)// undefined
/*now if we want this output as number then do
   let ValueInNumber= Number(score)
   console.log(typeof ValueInNumber)//output is number*/
//console.log(ValueInNumber); output is NaN


// let score =true //boolean;
//console.log(typeof score)// boolean
/*now if we want this output as number then do
   let ValueInNumber= Number(score)
   console.log(typeof ValueInNumber)//output is number*/
//console.log(ValueInNumber); output is 1


// let score ="Amir"; 
//console.log(typeof score)// string
/*now if we want this output as number then do
   let ValueInNumber= Number(score)
   console.log(typeof ValueInNumber)//output is number*/
//console.log(ValueInNumber); output is NaN



//Now convert number to boolean 1=true and 0= false
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//output is true


//let isLoggedIn = "" output is false
//let isLoggedIn = "Amir" output is true

