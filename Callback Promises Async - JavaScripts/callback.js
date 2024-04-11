//Synchronous programming order to  do work one by  one
console.log("one");
console.log("two");
console.log("three");
//Asynchronous order to instruct random time to do work
function hello(){
    console.log("hello");
}
setTimeout(hello,  2000); //<-to wait 2000ms = 2s then run the code

//or
setTimeout(()=>{
    console.log("This is Arrow Function");
},  4000); //timeout-> print after 4 sec

//check is the timeout function affect?
console.log("three"); //No!

//CALLBACK

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

calculator(10,20, sum);

//or
calculator(3,4, (a,b)=>{
    console.log(a+b);
})
 
//callback hell (problem in nesting)

function getData(dataId, getNextData){   //callback
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
        getNextData()};
    },2000);
}
//callback hell / nested callback
console.log("getting data 1...");
getData(1, () =>{
    console.log("getting data 2...");
    getData(2, ()=>{
        console.log("getting data 3...");
        getData(3);
    })  //nested arrow function  and working as  CALL BACK FUNCTION
});
//better option for callback hells is Promisese