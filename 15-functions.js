//if we are using any ecommerece app and we put many items to cart list and how to calculate price of all cart items
function calculatePrice(num1){
    return num1
}
//console.log(calculatePrice(200,300,400))//200 ,it returns only first no. and not add all the prices


function calculatePrices(val1 ,...num1){
    return num1
    //return val1

}
//console.log(calculatePrices(200,300,400))//[ 300, 400 ] in array form,and 200 is assigned to val1



//to overcome above problem to add all the prices of all cart items we use => (...)
function calculatePrice(...num1){
    return num1
}
// console.log(calculatePrice(200,300,400))//[ 200, 300, 400 ] in array form



// how to pass object to a function

// const user ={
//     name:"Amir",
//     price:356,
// }

function handleObject(anyobject){//as user is object,so we pass anyobject in parameter
    console.log(`name is ${anyobject.name} and price is ${anyobject.price}`);
}
//handleObject(user)


//we can pass directly object to functions
handleObject ( {
    name:"Amir",
    price:356,

})


//how to pass array to functions
const array=[100,300,500]


function returnSecondValue(getArray){
    return getArray[2]

}
//console.log(returnSecondValue(array))//500

//we can directly pass array to functions
console.log(returnSecondValue([300,800,700]))//700


