//dates
let myDate = new Date()
console.log(myDate.toString())//Sun Feb 04 2024 23:10:43 GMT+0000 (Greenwich Mean Time)
console.log(myDate.toLocaleDateString())//2/4/2024
console.log(myDate.toLocaleString())//2/4/2024, 11:10:43 PM
console.log(myDate.toDateString())//Sun Feb 04 2024
console.log(typeof myDate)//object



let myCreateDate= new Date (2022,0,23)
console.log(myCreateDate.toDateString()) //Sun Jan 23 2022,=>month starts with 0 




let mynewCreateDate= new Date (2022,0,23,6,45)
console.log(mynewCreateDate.toLocaleString()) //1/23/2022, 6:45:00 AM, 




let newCreateDate= new Date ("2022-01-14")   //yymmdd
console.log(newCreateDate.toLocaleString())  //1/14/2022, 12:00:00 AM



let myTimeStamp = Date.now()
console.log(myTimeStamp)             //1707089012428    =>meli-second-value
console.log(myCreateDate.getTime())  //1642896000000


console.log(Date.now())                   //1707089478685  to convert it to second divide by 1000
console.log(Math.floor(Date.now()/1000))  //1707089671


let newdate = new Date()
console.log(newdate)          // 2024-02-04T23:40:31.572Z
console.log(newdate.getMonth())// 1= february,month starts from 0
console.log(newdate.getDay())// 0=sunday
