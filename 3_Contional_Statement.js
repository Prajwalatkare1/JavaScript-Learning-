let a = 45;
let b = 87;

if(a<=b && b === 87){
  console.log("Yes it's True");
}else{
    console.log("False");
}


// Dark/Black Mode color 

let mode = "white";
let color;
if(mode === "white"){
    color =  "Dark";
}
if(mode == "Black"){
    color =  "White";
}

console.log(color);


//  IF else StateMent 
// vote
let age = 52;

if(age>=18){
    console.log("Yes Can vote");
}
else{
    console.log("You Cannot Vote");
}


// odd or even number 

// let Inp = prompt("Enter the Value ");

// if(Inp % 2 === 0){
//     console.log(Inp , " is a Even Number ");
// }else{
//     console.log(Inp , " is Odd Number");
// }



// if and else of Statements 

let ag = 65;


if(ag <= 18){
console.log("Junior");
}
else if (ag <= 65){
    console.log("Senoir");
}
else{
    console.log("Middle")
}


// ternary operator 

let num = 854;
num>=1000 ?console.log("Two Zero "):console.log("Three Zero");



// Home Work

// Question no:1

// Multiple of 5  and take the Input 

// let input = prompt("Enter the number : ");
// if(input%5 === 0){
//     console.log(input , " is a Multiple Of 5 ");
// }else{
//     console.log(input , " is a not Multiple of 5");
// }

// Question 2
// Write a code which can give grades to students according to their scores:

// • 80-100, A
// • 70-89, B
// • 60-69, C
// • 50-59, D
// • 0-49, F


let input = prompt("Enter the Number");
if(input >= 80 && input <=100){
    console.log("A");
}
else if (input >=70 && input<= 79){
    console.log("B");
}
else if(input >=60 && input <= 69){
    console.log("C");
}
else if(input >=50 && input <= 59){
    console.log("D");
}
else if(input >=0 && input <= 49){
    console.log("F");
}


