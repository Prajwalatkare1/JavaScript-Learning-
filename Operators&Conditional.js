// Hello Ji kaise Ho aap // Comments 



// Arthimatic operators 

let a =  45;
let b = 21;

console.log(a+b);  //Addition 
console.log(a-b);  // subtraction  
console.log(a*b);  //Multiplication
console.log(a/b);  //Division
console.log(a%b);  //modulus 
console.log(a**b);  //Exponentiation  45 ki power 21 

// unary operators

//  ++a; pre increment operators 
//  a++; post increment operstors 
//  --a; pre decrement operators 
//  a--; post decrement operators


console.log(++a); 46
console.log(a++); 46 / 47
console.log(--b); 20
console.log(b--);  20/19


//  Assigment Operators

a+=4;
a-=5;
a/=5;
a*=7;
a**=5 ; // a ki value se 5 ka exponention //
console.log(a);


// Comparision Operators (it always return boolean Value)

let c = 10;
let d = 8;

// == equal to 
// ! not equal  to

console.log(c == d );
console.log(c!==d);


// === strict equal to 

// normal equal to number or string ka Comaprision Same  show karta hai but in strict equal to ye same show nahi karta;
// For Example 
// normal equal to value 
let x = 78;
let y = "78";
 console.log(x == y); //This will be Same in Normal Equal to value //

//  Sticter Eual to value 

let f = 78;
let g = "78";
console.log(f === g);

// not equal to !==
// !==

// < less than 
// > Greater than
// >= greater than equal to 
// <= less than equal to


// Logiacal Operator 

// logiacl And && 
// IT is used to verify two statement , but both the statement will be true 

let m = 37;
let n = 96;

let  valuem = m<=n;
let valuen = n === 96;
console.log(valuem && valuen);


// logiacl ||  any one condition should be true 

let i = 39;
let p  = 51;

console.log(i<=p || p === 50);


// logiacl ! not   

// true ko false 
// false ko true 

let t = 39;
let q  = 51;

console.log(!(t>q) && !(q ==50) );
console.log(!(t<q) && !(q == 50) );
console.log(!(t<q) && !(q ==51) );
