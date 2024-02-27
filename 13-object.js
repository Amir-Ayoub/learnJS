const course={
    coursename:"front end development",
    price:"12399",
    courseinstructor:"amir"

}
//if we have to use any of these values for that we use
const {courseinstructor}=course
console.log(courseinstructor)

//we can destructure any value see the above console log and below one
const {courseinstructor:instructor}=course
console.log(instructor)

//we use this de-structuring in react ,if we have
// const navbar=(props.company)  => {  
     /*intead of contineously writing props.what we need,
    we write ({what we need}); this is how we do de-structuring */

// }
// navbar(company="amir")


