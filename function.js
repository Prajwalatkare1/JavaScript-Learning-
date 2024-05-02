// Basic Function 
// function myFunction(){
//     console.log("Nameste Duniya ");
//     console.log("Varius Functionlaties Into the Vast condiation ");
// }
// // Basic Function 
//   myFunction();

// Question:2 Print a Funtion thats Prints the Input 

// function inputFunction(msg){
//   console.log(msg);
// }

// inputFunction("I Love JavaScript");


// Question : 3   Print a Function that takes multiple input 
// function multipleInput(input1 , input2){    //paramenters 
//   console.log(input1);
//   console.log(input2);
// }

// multipleInput("Hello" ,"India");    // Arugument 

// Question 3 sum of two Number 

// function sumNumber(x,y){
//       console.log(x+y);
// }

// sumNumber(45,78);

// Return Function 

// function returnTheValue(x , y){
//    let sum = x+y;
//    return sum;
// }

// let vat = returnTheValue(45 , 79);
//    console.log(vat);




// Calculator program

// function addition(x , y){
//      return x+y;
// }

// function subtraction (x,y){
//        return x -y;
// }
// function multiplication (x,y){
//     return x*y;
// }

// function division(x,y){
//     return x /y;
// }
// function modules (x,y){
//     return x%y;
// }

// let x = prompt("Enter the number1 ");
// let y = prompt("Enter the Symbol ");
// let z = prompt("Enter the number2 ");

// if(y === '+'){
//  let vt = addition(x,z);
//  console.log(vt);
// }
// else if( y === '-'){
//     let vt =  subtraction(x,z);
//     console.log(vt);
// }
// else if(y === '*'){
//     let vt =  multiplication(x,z);
//     console.log(vt);
// }
// else if(y === '/'){
//     let vt =   division(x,z);
//     console.log(vt);
// }
// else if(y === '%'){
//     let vt =   modules(x,z);
//     console.log(vt);
// }


// Arrow Function 
   
// const addit = (num1 , num2 )=>{
//  console.log(num1 * num2);
//

// Question no : 1
// Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.Norma
// Normal

// let v  = "ILoveJAVASCRIPT";
// let sum = 0;
// for(let i  of v){
//   if(i === "A"||"E" || "I"||"O"||"U"||"a"||"e"||"i"||"o"||"u"){
//     sum++
//   }
    
// }
// console.log(sum)

// with Function 

// function vowel(){
//   let count = 0
//    for(let i of vowel){
//     if(vowel === "a" || "e"|| "i" || "o" || "u")
//       count++;
//    };


// console.log(count);
// }


// with arrow fuction 
let vowels=() =>{
   let count = 0;
  for(let i of vowels ){
    if(i  === "a" || "e" || "i" || "o" || "u" ){
        count++;
    }
  }

  console.log(count);
}


 vowels("ILOVEJAVASCRIPT");
