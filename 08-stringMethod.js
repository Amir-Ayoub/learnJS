//string methods in js 


//TO FIND LENGTH  = .lenth is used to find characters in a string.
let name = "Amir";
//console.log(name.length);

//toLowerCase () method is used to convert all characters in a string to lower case
let text="Hello World";
let lowerText=text.toLowerCase();
//console.log(lowerText);


//toUpperCase () method is used to convert all characters in a string to upper case
let address="India";
let upperaddress=address.toUpperCase();
//console.log(upperaddress)


//indexOf() method finds the first occurence of a specified value in a string and returns its positions
let messege = "Hello,how are you?";
let position= messege.indexOf("are");
//console.log(position);


//substring() method is used to extract a part of a string between two specified positions and returns a new string
let message ="I love javascript";
let partialMessage = message.substring(2,8);
//console.log(partialMessage);


//split() method divides a string into an array of substring based on a specified delimiter.
let study ="I am learning javascript";
let words = message.split(" ");
//console.log(words);

//replace() method searches a string for  a specified value and replaces it with a new value
let Message="I love cats";
let newMessage = Message.replace("cats","parrots");
//console.log(newMessage);


//trim() method removes whitespace from both the begining and end of a string.
let input = "   Hello,   world     ";
let trimmedInput = input.trim();
console.log(trimmedInput);
