async function hello(){
    console.log("hello");
}

//to pause the execution time, until it gets done and then run another code


//await

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("api");
            resolve(200);
        }, 2000);

});  //will exxecute first data then it will go next
}

async function getWeatehrData(){
    await api();
}

//IIFE Immediatel Invoked Function Expression
//function without name
//arrow without name
//async function without name
//execute insatntly and only once