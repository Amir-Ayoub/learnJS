//for loop is used to print a certain block of code no. of times 
// for(let i =1;i<9;i++){
//     console.log("table of " + i +" is below")
//     for(let j=1;j<=10;j++)
//     console.log(i + "*" + j + "=" + i*j)
// }



// let array=["todat is sunday","today is friday"]
// for(let i=0;i<array.length;i++){
// const holiday= array[i]
// console.log(holiday)
// }

// breack vs continue
for(let i=1;i<10;i++){
if(i==90){// if the condition does't matches then it will print upto end 
    console.log("detected 6")
    break// if condition matched then it wil only print below that  
}
console.log("value of i is", i)
}

for(let i=1;i<10;i++){
    if(i==6){
        console.log("detected 6")
        continue// if condition matched then it will print all excluding that one   
    }
    console.log("value of i is", i)
    }