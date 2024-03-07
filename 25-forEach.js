const names=["Amir","Irfan","Masood","Shahid"]
//names.forEach( function (item) {//this is call back function so we don't use name of a function,item is name of parameter present in array
    //console.log(item);//Amir,Irfan,Masood,Shahid
//} ) 

//now by using arrow function
//names.forEach( (val) => {
   // console.log(val)//Amir,Irfan,Masood,Shahid
//})


//by using function we can also print it
// function print(item){
//     console.log(item)//nothing prints
// }
// names.forEach(print)////Amir,Irfan,Masood,Shahid



const friends=[
    {
        Name :"Amir",
        Address :"pulwama"
    },
    {
        Name :"Shahid",
        Address :"Shopain"
    },
    {
        Name :"Fazil",
        Address :"Kupwara"
    },
]
friends.forEach( (item) => {
    //console.log(item.Name)//Amir,Shahid,Fazil
    console.log(item.Address)//Pulwama,Shopain,Kupwara
})