// Immediately Invoked Function Expression  (IIFE)

function newProject(){
    console.log("Run Sucessfully");
}
newProject();// Run Sucessfully

/* sometimes global scope cause pollution and to prevent,we use IIFE 
we wrap our code in ()  */
(function project(){//// named IIFE
    console.log("Run Sucessfully")
})() ; // Run Sucessfully,
/* () first one is for function definition and 2nd one () is of excution call */


( function project2nd() {// named IIFE
console.log("Run sucessfully 2nd one")
})();//Run sucessfully 2nd one, and ; above function as in IIFE it invoked but doesn't know were to stop context

/*we can also use arrow function for it and now we skip the name of function */
( ()=> {
console.log("Run sucessfully 3nd one")
})();//Run sucessfully 3nd one, and ; above function as in IIFE it invoked but doesn't know were to stop 


/*we also print variable from this function */
( (name)=> {  //unnamed IIFE
    console.log('Run sucessfully 4th one ${name}')
    })('Amir');//Run sucessfully 4th one Amir

    /* NOTE IF HAVE TO WRITE MORE THAN ONE IIFE SIMALTANEOUSLY THEN USE ; AFTER EACH IIFE AS SHOWN ABOVE */