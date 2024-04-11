//promises is object in javascripts
//let promise = new Promise((resolve, reject) => {
//    console.log("inside promise");
//    resolve(123); //if fullfilled promise
//    reject("error"); //if cant fullfilled promise
//});
//api will return new promise
/*
function getData(dataId, getNextData){   //callback
    return new Promise((resolve, reject) => { //promise returned by api
    })
}

/*Pending : the result is undefined
Resolved : the result is a value (fulfilled)
Rejected : ⭐️the result is an error object ⭐️

const getPromise = ()   => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("Success"); //if fullfilled promise
        reject("error"); //if cant fullfilled promise
    });
}


let promise = getPromise();
promise.then(() => {
    console.log("promise fullfilled");
});

promise.catch(() =>{
console.log("Rejected");
});
//then and catch is the function
*/



//promise chain
function asyn1(){
    return new Promise (( resolve, reject) => { //promise returned by api
        setTimeout(()=>{
            console.log("Some Data 1");
            resolve("Success");
        }, 4000);
})}


function asyn2(){
    return new Promise (( resolve, reject) => { //promise returned by api
        setTimeout(()=>{
            console.log("Some Data 2");
            resolve("Success"); 
        }, 4000);
})}

/*
console.log("Fetching data 1");
let p1 = asyn1();
p1.then((res)=>{
    console.log(res);
}) 
*/


//better promise chaining

console.log("Fetching data ....");
asyn1().then((res)=>{
    console.log("Fetching data 2...");
    asyn2().then((res)=>{});
});