let str  = "Hello Indore ";    //The way to  write a string //
 /*str.length*/ console.log(str.length);  // To calculate  the Length of String //

 /*str[2]*/ 
//  To Calculate the individual String index 
 console.log(str[0]);
 console.log(str[1]);
 console.log(str[2]);
 console.log(str[3]);
 console.log(str[4]);
 console.log(str[5]);
 
// Template literals 
// example 

const students  = {
name : "Prajwal_Atkare",
age : 22,
address: "Jaitala,Nagpur "
};


console.log( `hello my name is Prajwal Atkare \n my age is ${students.age} and my address  is ${students.address}`);

// \n is used to change the line in baktics 


let twin = "I love JavaScript  ";  //It Never Changes the Original Value 
console.log(twin.toUpperCase()); //To create all values In Capital
console.log(twin.toLowerCase()); // To Create all the Values in Lower Case 
console.log(twin.trim()); //Start or End ki Spaces Remove karke deta hai
console.log(twin.slice(5,8))//Tukde mei Divide karta hai from 5th index to 8 index,end is not ,mandatory.

let i = "HONEY";
let p = "Singh";
let res = i.concat(p); // it is used to merge two strings 
console.log(res);

let t = "HONEY";
let s =  123;
let pes = t.concat(s); // it is used to merge two strings 
console.log(pes);


let pink = "Hello ji kaise ho app";   //Particular INDEX KI vALUE kO Change Karega 
let trt = pink.replaceAll(" ",85);  
let ktm = pink.replace("H" , "K");
console.log(trt);
console.log(ktm);


// Home Work
// Let's Practice
// Q1. Prompt the user to enter their full name. Generate a username for them based on the input
// Start username with @, followed by their full name and ending with the fullname length.


let vtr = prompt("Enter the Number");


let spi  = "@" + vtr + vtr.length;
console.log(spi);

