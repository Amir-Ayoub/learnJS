const month=3
switch(month){  // here month is key
    case 1:
        console.log("January")
        break;
        case 2 :
        console.log("Febuary")
        break;
        case 3:
            console.log("March")
            break;  //if we don't use break,when key matched after that it doesn't check leads to print rest keys except default
            case 4:
                console.log("April")
                break;
                case 5 :
                    console.log("May")
                    break;
                    default:
                        console.log("not matched")
                         break;
                    
}




/////**********truthy value and falsy value   */
 
const userName="Amir Ayoub"
if(userName){
    console.log("got user name")
}
else{
    console.log("empty user name")//got user name
}

const empty=""
if(empty){
    console.log("got user name")
}
else{
    console.log("empty user name")//empty user name
}

const array=[] //array
if(array){
    console.log("got user name")
}
else{
    console.log("empty user name")//got user name
}

    /*falsy value
      false,0,-0,BigInt 0n, "",null,undefined, NAN  rest are truthy value

     values in string are truthy value
      truthy value= "0","false"," ",[],{},function(){}
     */

//empty array
const name=[]
if(name.length===0){
    console.log("empty is array")//arrayis empty
}

//empty object
const userage={}
if(Object.keys(userage).length===0){
    console.log("object is empty")//object is empty
}



/*  Nullish Coalescing Operator(??) : null , undefined
this is used to eliminate the null or undefined value by other value 
this is used to handle errors while getting null or undefined values ,by assigning other values */
let val1;
val1 = 5 ?? 9// here null or undefined are not present it will take first value
//  val1= null ?? 9// here first value is null it will take second value
//  val1= undefined ?? 9//here first value is undefined it will take second value
// val1= undefined ?? 6??  9//it will take 6 as first one is undefined
// val1= undefined ?? null ?? 9 //it wil take 9 as first one is null and second one is undefined
console.log(val1);


/*   Terniary operator
Syntex: Condition ? true or false */
const age=14
age >=18 ? console.log("greater than 18") : console.log("less than 18")//greater than 18