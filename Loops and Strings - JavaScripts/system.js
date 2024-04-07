console.log("Hi");

//loop
//for loop, while, do while, for of loop

for (let i = 0; i <=5; i++) {
    console.log("Hi");
}

//sum of 1 to n
let sum = 0;
let n= 6;
for (let j = 0; j <=n ; j++) {
     sum  = sum + j;
} console.log("sum of 1 to n:", sum);


//while loop
let q = 1;

while (q <= 10) {
    console.log(q);
    q = q + 1;
}


// do while
console.log("Do while loop");
do{
    console.log(q);
} while (q <= 10);


//for of loop
//for string
let str  = "Neel Islam";
 for(let i of str){
    console.log(i);
 }

 //string calulate
 let str1 = "JabaScript";
 let size = 0;
 for (let i of str1){
    size = size + 1;
    
 }console.log("The size of String is:", size);

 //for objecty
 let student = {
    name: "Neel",
    age: 23,
    city: "Dhaka"
 };
 for (let key in student) {
    console.log("Key:", key); //key name
    console.log("Key=", key, "Value=",student[key]); //key value
 }


 // print all the odd numbers from 0 to 100;

 console.log("odd numbers from 0 to 100:");

 for (let i = 0; i <= 100; i++) {
    if (i % 2!= 0) {
        console.log(i);
    }
 }


// Guessing number game
/*
let gameNum = 25;

let userNum = prompt("Enter your number:");
console.log("Your num:", userNum);

while (parseInt(userNum) !== gameNum) {
    userNum = prompt("Enter your number:");
    console.log("Your num:", userNum, "Which is wrong! Try again");
}

console.log("You win!");
*/


//String
let ste3= "Neel";
let ste4 = "J a";

console.log(ste3.length);
console.log(ste4.length);
console.log("Index finder");
console.log(ste3[0]);
console.log(ste3[3]);


//template litrals

let sentence = `This is a template literal`; //back tick-> `
console.log(sentence);
console.log(typeof sentence);

//why back tick?
let obj = {
    item: "Pen",
    price: 100
};
console.log("The cost of", obj.item, " is", obj.price, "taka");
//lets combine thi compact
let output = `the cost of ${obj.item} is ${obj.price} taka`    //${obj.item}   , ${obj.price} place holder
console.log(output);

let sumarpo = `Sum of 1 2 and 3 is ${1+2+3}`
console.log(sumarpo);




//escapee character
//template literal
console.log("New line printing...");
console.log("My name is \nNeel");
console.log("My name is \tNeel");

let string1 = "Osaki saki re saki saki";
console.log(string1.length);

//string method

console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

let string2 = "                 Kiya Kiyaja Ki aja Ki a re sanam     ";
console.log(string2.trim()); //trim from both side
console.log(string2.trimStart()); //trim from start
console.log(string2.trimEnd()); //trim from end
let string3= "1234567";
console.log(string3.slice(1,5));
console.log(string3.slice(1));


//concat
let string4 = "Neel";
let string5 = "Islam";

let res = string4.concat(string5);
let rev = string5.concat(string4);
console.log(res);
console.log(rev);
let addString = `My name is ${string4} ${string5}`;
console.log(addString);

//replacing value in string
console.log("String replacing");
let string7 = "Hello";
console.log(string7.replace("H" , "y"));
let string8 = "Hello";
console.log(string7.replace("l" , "y")); //replacing first l
let string9 = "Hello";
console.log(string9.replaceAll("l" , "y")); //replacing all l

//char at
let string10 = "IloveJavaScript";
console.log(string10.charAt(3)); // will only print the nth value\
//change the nth string
let string11 = "IloveJavaScript";
console.log(string10.replace("S", "K"));