//const array=[1,2,3,4,"amir",true]  element can be different
const array=[1,2,3,4]
//array methods 
array.push(5,6)//pushes elements at last 
// console.log(array[2])
array.pop()//pops last element
array.unshift(10,11)//pushes element at first
 array.shift()//pops element at first
// console.log(array);
// console.log(typeof array);
// console.log(array.includes(9))// means is 9 present in array= false;
// console.log(array.indexOf(3))
// console.log(array.indexOf(9))// = -1,means it is not in array 

// const newArray= array.join()//joins converst array to string
// console.log(array)     //[ 11, 1, 2, 3, 4, 5 ]
// console.log(newArray)  //11,1,2,3,4,5

//  slice and splice methods
// console.log("A ",array)
const newArr = array.slice(1,3)//prints elements from including 1 and excluding 3
// console.log(newArr)//[ 1, 2]
// console.log("After Slice ",array)


// console.log("B ",array)
const newArr2 = array.splice(1,3)/*changes the orignal array ,
splice portion comes out from array and rest elements remains in array,original array is manipulated*/
// console.log(newArr2)//[ 1, 2, 3 ]
// console.log("After splice ",array)




//How to concat/concat two arrays

const fruits=["Apple","BAnana","MAnge"]
const vegetables =["Patato","turnip","Onion"]

//fruits.push(vegetables)//problem is array inside array 
// console.log(fruits)//[ 'Apple', 'BAnana', 'MAnge', [ 'Patato', 'turnip', 'Onion' ] ]
// console.log(fruits[3])//[ 'Patato', 'turnip', 'Onion' ],considers this array as one element

// const allItems=fruits.concat(vegetables) //to concat we need a constant to store its value
// console.log(allItems)      //[ 'Apple', 'BAnana', 'MAnge', 'Patato', 'turnip', 'Onion' ]
// console.log(allItems[3])  //Patato




/* for that we can use a easy method spread method*/

// const allNewItems=[...fruits,...vegetables]//by using ... we can take no. of values
// console.log(allNewItems)


// const newArray=[1,2,3,[4,5,6],[7,8]]
// const newArray2=newArray.flat(Infinity)//we can use flat(2)=> uto two indepth
// console.log(newArray2)



console.log(Array.isArray("Amir"))//false
console.log(Array.from("Amir"))//[ 'A', 'm', 'i', 'r' ], from makes it array
console.log(Array.from({name:"Amir"}))/* [] means empty,can"t convert it directly,
bec it doesn"t know from which to make array either from key or value*/



let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ]


// array.isArray
// array.froma
// array.of

