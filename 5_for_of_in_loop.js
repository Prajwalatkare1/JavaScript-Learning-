// for of loops 

// for in loops


// 1) For of Loop (Basically it is Used to print string and Array )

// 1) We don't have to do initialization in it;
// 2) We don't have to do updation in it;
// 3) We dont have to give Stopping Condition in it;

// Print String 
let str = "Nameste Bharat ";
let size = 0;
for(let i of str){
    console.log(i);
    size++;
}
console.log(str.length);
console.log(size);


// 2) For In loops (It is Used to Print Objects )

const students = {
    name : "Jay Kanathe",
    age :21,
    fathername : "Prajwal Atkare",
    Address:"Banganga ,Indore",
    mobile :  1213123,
    isSingle : false 
};

for(let i in students){
    console.log(i , " = " , students);
}


