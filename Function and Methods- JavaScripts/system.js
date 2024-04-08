//function
function myFunction() {    //defining a function
    console.log("Hi Im neel");
    console.log("We are learning HTML");
}

myFunction(); //calling the function


function myFunction1(msg) {    //here msg is a parameter->input
    console.log(msg);
}
myFunction1("I love js"); //arguement

//NaN means not a number
//sum calculate funtion
 function sum(a, b) {
    console.log( a+b );
}

sum(10, 20);


function s(a, b) {
    s = a -b;
    return s;
}

let cal = s(20, 20);
console.log(cal);


//arrow function

function sum1(a,b) {
    return a+b;
} //mormal function

const arrowMul = (x,y) => {
    console.log(x*y);
};
arrowMul(10, 10); //arrow function
//arrown funtion is for small task only

const printHello=()=>{
    console.log("Hello");
}
printHello();




//practice question 
//Create a function that returns vowel from a string

function vowel(inputStr) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (const char of inputStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(count);
}

vowel("uppultharanga");

//with arrow function


//forEach   loop in array
//methods bind with object
//callback function
console.log("forEach loop function in array");

let arra = ["apples", "bananas", "pineapple", "oranges", "mangoes"];
arra.forEach(function printVal(val1){
    console.log(val1);
})        //each value at each index

//same with arrow function
arra.forEach((val)=>{
    console.log(val.toUpperCase());
})


arra.forEach((val2, idx, arra)=>{
    console.log(val2.toUpperCase(), idx), arra;
})   //can input multiple variable as parameter



//high order function <- call abck function that use or return another function inside a fucntion
//practice
//Qs. For a given array of numbers, print the square of each value using the forEach loop.
let garray = [1,2,3,4,5,6]

garray.forEach((val)=>{
    console.log(val*val);
})
//method 2
let calcsqr = (garry) => {
    console.log(garry**2);
};

garray.forEach(calcsqr);


//map function
//similar to forEach but creates a array
let jarray = [1,2,3,4,5,6];
let newarray = jarray.map((val4)=>{
    return val4;
})
console.log(newarray);

//filter method
let arr=[1,2,3,4,5,6];
let newar = arr.filter((val)=>{
    return val%2 == 0; //filtering even
})

console.log(newar); // printing even number

//filter method
let arr1=[1,2,3,4,5,6];
let newar1 = arr.filter((val)=>{
    return val < 3; //filtering lessr than 3
})

console.log(newar1);

//reduce method
let arr5=[1,2,3,4,5,6];
let newar5 = arr.reduce((val)=>{
    return val < 3; //filtering lessr than 3
})
console.log(newar5);

const array90 = [1, 2, 3, 4];
   
    const initiatVatue = 0;
    const sumWithInitial = array90.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initiatVatue,);
    console.log(sumWithInitial); //expected output 10




    let array70 = [1,2,3,4,5];
    const output = array70.reduce((res,curr)=> {
        return res + curr;
    })
    console.log(output); //expected output 15
    //find greater than
    let array80 = [100,1,2,3,4,5,19,1,4,6,8,20,200,1,4];
    const output2 = array80.reduce((res,curr)=> {
        return res > curr ? res :curr;
    })
    console.log(output2);

    //practice 2
    // filter out 90+ mark
    let mark = [97, 64, 32, 49, 99, 96, 86,1];
        let toppers = mark.filter((val)=>{
        return val > 90;
        })
        console.log(toppers) ;

//numer of array
/*
let n = prompt("enter a number: ");
let array55 = [];
for( let i=1; i<=n; i ++ ){
 array55[i-1]; //1(0), 2(1), 3(2)
}
*/
let array66 = [1,2,3,4,5]
let cum = array66.reduce((prev, curr)=>{
    return prev + curr;
})

console.log(cum);

// factorial

let fact=[1,2,3,4,5]

let factans = fact.reduce((p,e)=>{
    return p*e;
});
console.log(factans);
