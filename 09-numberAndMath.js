const score=457;
// console.log(score.toString())
// console.log(score.toString().length)
// console.log(score.toFixed(2))//giving .00 if we use 3=> .000 

const anotherNumber=23.643;
//console.log(anotherNumber.toPrecision(2)) 
/*in 2 answer is 24 bec of roundoff after decimal no. if we give 
3 then answer is 23.6 */


const hunderds=1000000//difficult to count zero
//console.log(hunderds.toLocaleString())// by default giving accourding to US standard
//console.log(hunderds.toLocaleString("en-IN"))//converts in indian standard



//++++++++++++++++++++++++++++  Maths   ++++++++++++++++++++++++++



// console.log(Math.abs(-7))
// console.log(Math.round(7.6))
// console.log(Math.ceil(7.2))// takes upper value=8
// console.log(Math.floor(7.8))// takes lowest value=8



// console.log(Math.sqrt(9))// squareroot value=3
// console.log(Math.sin(90))
// console.log(Math.min(7,9.5,3,8))// takes minimum number=3
// console.log(Math.max(7,9.5,3,8))// takes maximum number=9.5




console.log(Math.random())// gives random no. between 0-1
console.log(Math.floor(Math.random()*10)+1)// gives random no. between 0-9


const min=10
const max=40
console.log(Math.floor(Math.random() * (max - min +1 )) +min)/* *10 so that answer not =0 , 
max - min=> range inbetween them ,+min => tells about what is minimum */





