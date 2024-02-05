const name= "amir "
const lastName="ayoub"
//console.log(name+lastName+" rather");//outdated method


//New method is
//console.log('Hello my name is ${name} and last name is ${lastName}')//string interpolation method



//another way is
const NAme= new String("amir")//giving key value and various methods after cosolelog in browser
// console.log(NAme[0]);//giving key value at postion 0
// console.log(NAme.__proto__);//there are various values  after cosolelog in browser
// console.log(NAme.length)
// console.log(NAme.toUpperCase())
// console.log(NAme.charAt(3))//position of a character in string
// console.log(NAme.indexOf("r"))// character at which position in string



const newname=name.substring(0,2)
console.log(newname)
const anothername=name.slice(-3,-1)
console.log(anothername)//difference between them is in slice we can give indexing from backside 


const newstring=" amir   "
console.log(newstring)
console.log(newstring.trim())//clears all whitespaces


const email="ratheramir349@gmail.com"
console.log(email.replace(349,678))//use to replace by new words
