/*for-in used for objects
syntex:for (const key in object) */
const shortTerm={
    js: "javascript",
    cpp:"c++",
    py:"python"
}
for (const key in shortTerm) {
  //console.log(key) //js,cpp,py
  //console.log(`${key} :- ${shortTerm[key]}`)
                                             /*js :- javascript
                                              cpp :- c++
                                             py :- python */
}



//  can use for-in loop for array
const name=["amir","fazil","shahid","sahil"]
for (const key in name) {
   //console.log(key)//0,1,2,3  prints keys

   //console.log(name[key])//amir,fazil,shahid,sahil

   //console.log(`${name} ${key}`)
                                 /*amir,fazil,shahid,sahil 0
                                 amir,fazil,shahid,sahil 1
                                 amir,fazil,shahid,sahil 2
                                 amir,fazil,shahid,sahil 3   */
}



/***   CAN WE USE FOR-IN LOOP FOR MAP */
const map=new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('BT', "Butan")
map.set('IN',"India")// india will be printed only once 
//console.log(map);    //{ 'IN' => 'India', 'FR' => 'France', 'BT' => 'Butan' }

//for-in loop
for (const key in map) {
 console.log(key)  //nothing prints  
}