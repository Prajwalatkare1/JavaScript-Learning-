let  heros = ["IronMan" , "Hulk" , "Thor" , "ShaktiMan" , "Batman"];
console.log(heros);
console.log(`The length og this array is ${heros.length}`);
console.log(typeof(heros)); //The type Array in Javascript is Object ,Javascript mei hum value ke jageh par indices ka use karte hai.
//To Access the all the particular index in javascript 
// console.log(heros[0]);
// console.log(heros[1]);
// console.log(heros[2]);
// console.log(heros[3]);
// console.log(heros[4]);

for(let i = 0; i<heros.length; i++){
    console.log(heros[i]);
}


// for of loop
console.log("    for of Loop");
for(let i of heros){
    console.log(i);
}

let Country = ["India" , "USA" , "China" , "Russia" , "Brazil" , "Australia" ,"France" , "Germanys"];
for(let i of Country){
    console.log(i.toUpperCase());
}

// Let's Practice

// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.


let stu = [85,97,44,37,76,60];
// let sumOfStudents = stu[0]+stu[1]+stu[2]+stu[3]+stu[4]+stu[5];
// let avg = sumOfStudents/stu.length;
// console.log(avg);

let sum = 0;
for(let  i = 0;i<stu.length ; i++){
    sum += stu[i];
}

let avg = sum/stu.length;
console.log(avg);


// Question:2
// "Let's Practice
// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]                 
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer."

let  price = [250, 645, 300, 900, 50];
let  offer =0;
for(let i = 0; i<price.length;i++){ 

  offer = price[i] /10;
  price[i] = price[i] - offer;
  console.log(price[i]);
}


// Array Method 

// push() : Array kei last mei number ko add krta hai 
let foodItems = ["Misal Pav" , "Vada Pava" , "Pav Bhaji" , "Puran Pori"]; 
foodItems.push("Modak" , "Zunka Bhakar " , "Batata vada "); 

for(let i of foodItems ){
    console.log(i);
}

//pop  It used to delete the last value array  and return the deleted value 
foodItems.pop();
for(let i of foodItems )
{
    console.log(i);
}

// to string it is used to convert array into string not changes the permanent one return new string .
foodItems.toString();

    console.log(foodItems);




    //concat to merge two array
let marks = [78,87,96,45,63,25];
let games = ["Cricket" , "Hockey" , "Football","Pubg","Chess"];

let combaition = marks.concat(games);
for(let i of combaition ){
console.log(i);
};


// unshift :add the value at the start of the array.
console.log("unshift");
marks.unshift(78,96,45,63);
for(let i of marks){
    console.log(i);
}

// shift : Remove the value at the end of the array.
console.log("Shift ")
marks.shift();
for(let i of marks){
    console.log(i);}

// slice : return a piece of array 
console.log("Slice");
let r = marks.slice(1 , 3);
for(let i of r){
    console.log(i);
}

// splice :change original array (add ,remove ,replace )
console.log("Splice") 
games.splice("stick",);

for(let i of games){
    console.log(i);
}








// Let's Practice

// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end


let compaines  = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM","Netflix"];
for(let i of compaines){
    console.log(i)
}

// Question no 1 
console.log("Remove 1 Compaines");
compaines.shift();
for(let i = 0;i<compaines.length;i++){
    console.log(compaines[i]);
}


console.log(" Add one Company");
compaines.splice(2,1,"ola");
for(let i of compaines){
   console.log(i);
}


console.log("Add amazon at the end");
compaines.push("Amazon");
for(let i of compaines){
    console.log(i);
}














































































































































































































































