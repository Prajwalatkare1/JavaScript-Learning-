// Print the value Multiple Time 
for(let i = 1;i<=25;i++){
    console.log("Next Prajwal, Comming Soon");
}

// Sum of all number
// let sum = 0;
// let inp =  prompt("Enter the value");
// for(let i  = 1; i<=inp; i++){
//        sum = sum + i;
// }

// console.log(sum);


// while loops

// let sum = 0;
// let input = prompt("Enter the number ");
// let i = 1;
// while(i<=input){
//    sum = sum +i;
//    i++;
// }

// console.log(sum);


// 2 divisible number upo to 100

// for(let i = 0;i<=100;i++ ){
//     if(i%2 === 0){
//         console.log(i);
//     }else{
//            "";
//     }
// }

// print any table 


// for loop 
// let table = prompt("Enter the number");
//  for(let i = 1;i<=10;i++){
//     console.log(table , " * " , i , " = " , table*i);
//  }

// while loop 
// let table = 7;
// let i = 1;
// while(i<=10){
//     console.log(table , "*" , i , " =" , table*i);
//     i++;
// }


// Home Work Question 
//  print 1 to 100 number ;

// 1) For loop
// for(let i = 1; i<=100; i++){
//     console.log(i);
// }

// 2) While  loop

// let j = 1;
// while(j<=100){
//     console.log(j);
//     j++;
// }

// Practise Question 2 
// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNumber = 45;
let userNumber = prompt("Enter the Correct Number : ");

while(gameNumber != userNumber){
        userNumber =prompt("Sorry , you entered the Wrong Number ");
}

console.log("Congralution You print Correct Number ");