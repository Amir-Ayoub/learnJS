/*for-of loop used for array,map
syntex:for (const iterator of object) here iterator is any variable we declear and object is on what we want to use this loop*/
const rollNo=[1,2,3,4,5,6]
//for (const id of rollNo) {///used to execute all the elements in the array 
    //console.log(id)   //1,2,3,4,5,6
//}

//used for strings for-of loop
const myName="Amir Ayoub"
// for (const firstname of name) {
 //console.log(`My name is ${firstname}`) //prints name with detectig space also  
//}

const name="Amir Ayoub"
for (const firstname of name) {
    //if(firstname == " "){
   // console.log("space found")}
 //console.log(`My name is ${firstname}`)
}

                                         /*My name is A
                                         My name is m
                                         My name is i
                                         My name is r
                                         space found
                                         My name is
                                         My name is A
                                         My name is y
                                         My name is o
                                         My name is u
                                         My name is b  */




// Maps having key value pair ,insertion order of the keys, and duplicate code not be  executed  skip once they are printed  
const map=new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('BT', "Butan")
map.set('IN',"India")// india will be printed only once 
//console.log(map);//Map(3) { 'IN' => 'India', 'FR' => 'France', 'BT' => 'Butan' }  executes in order

//now if we use for-of loop on map 
for (const key of map) {
    //console.log(key)//excutes in array 
                     /*[ 'IN', 'India' ]
                       [ 'FR', 'France' ]
                       [ 'BT', 'Butan' ]  */ 
}


//if we want to print it with out putting them in array
for (const [key,value] of map) {//array de-structure
    console.log(key,":-",value)
                                /*IN :- India
                                 FR :- France
                                BT :- Butan  */
}

/******************    WE CAN'T USE FOR-OF LOOP FOR OBJECTS *************** */
