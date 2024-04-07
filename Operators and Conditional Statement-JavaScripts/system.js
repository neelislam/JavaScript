//This is single line comment
/* This is a multi-line
comment*/

//operators 
//+,-,*,/, modulus, exponentiation, increment, Decrement 
 let a = 5;
 let b = 10;
 console.log("a = ", a, " & b = ", b);
 console.log(a + b);
 console.log(a - b);
 console.log(a * b);
 console.log(a / b);
 console.log(a % b); //modulus
 console.log(a ** b); //exponentiation
 console.log("Value of a: ", a); //increment
 console.log("post increment of a: ", a++); //post increment, value will print first, change later
 console.log("pre increment of a: " , ++a); //pre increment, will change first then print 

 console.log(--a); //Decrement
 console.log(a--); //Decrement
 let c = 88;
 let d = 100;
 let e = c+d;
 console.log("c = ", c, " d = ", d, " & e = ", e);
 console.log(e);

 e = e + 1;
 console.log("e = ", e);

 // compare
 // ==, ===, !=, !==, <, <=, >, =>
console.log("Compare value");
console.log("");

ab= 12;
bc= 12;
 console.log("ab==bc", ab == bc) // will return boolean value
 console.log("ab!=bc", ab != bc)
 console.log("ab===bc", ab === bc)
abc= 12;
bcc= '12';
console.log("checking with abc==bcc", abc==bcc);
console.log("checking with abc===bcc", abc===bcc); // strict version if datab types are diffrent

//logical oeprator
//logical and, or, not
console.log("");
console.log("Logical oeprator: ");

abcd= 12;
bccd= '12';
console.log("checking with and operator abc==bcc", abcd==bccd && abcd===bccd); //and operator, both have to be correct
console.log("checking with or operator abc===bcc", abcd===bccd || abcd==bccd); //or operator, if one of them correct will be enough

//Conditionalstatement 
//example
/*
 let color;
 if(mode === "dark-mode") {
    color = "black";
 }
 */


let age=  18;
if (age >= 18){
    console.log("You are adult");
}
else{
    console.log("You are child");
}
age= 16;

if (age < 18){
    console.log("You are child");
}

//odd even
let num = 10;
if (num % 2 === 0){
    console.log("even number");
}
else{
    console.log("odd number");
}
let snum = 111;
if (snum % 2 === 0){
    console.log("even number");
}
else{
    console.log("odd number");
}

//elseif statement 

let numage = 29;
if (numage < 18){
    console.log("Child");
}
else if (numage > 18 && numage < 30){
    console.log("Teen");
}
else {
    console.log("Adult");
}
// assigning 
/*
if ( mode === "dark"){
    console.log(mode);
}
*/

//Operator
// ? -> true
// : -> false
let ageone = 18;
let result = ageone >= 18 ? "Adult" : "Child"; //compact statement 
console.log(result);



//mdn
console.log("");
console.log("MDN Switches");
const expr = 'papayas';
switch (expr){
case 'Orange':
console.log("Orange are 0.65 taka");
break;
case 'papayas':
console.log("papayas are 0.66 taka");
break;
defaut:
console.log('sorry, wea re out of $(expr}.');}

const expr1 = 'Orange';
switch (expr1){
case 'Orange':
console.log("Orange are 0.65 taka");
break;
case 'papayas':
console.log("papayas are 0.66 taka");
break;
defaut:
console.log('sorry, wea re out of $(expr}.');}




//practice 1
//alert("Hello!");//one time popup
/*prompt("Hello");//shows mssg and also can take input

let nameg = prompt("Enter your name");
console.log(nameg); // can take user input */



//practice 2
let modnum =  prompt("Enter your num: ");
if (modnum %5 ===0){
    console.log(modnum + " is divisible by 5");
}
else{
    console.log(modnum + " is not divisible by 5");
}


//practice 3
//Practice Qs2
let score = 75;
let grade;
if (score >= 90 && score <= 100){
grade = "A";
}
else if (score >= 70 && score <= 89){
grade = "B";
}
else if (score >=60 && score <=69){
grade =  "C";
}
else if(score >=50 && score<=59){
rade = "D";
}
else if(score >=0 && score<=49){
grade = "F"; 
} else {
    console.log("Invalid input");
}

