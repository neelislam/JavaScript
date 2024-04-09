let btn1 =  document.querySelector("#btn1");
/*
btn1.onclick = (e) => {    //will action once mouse get clciked
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};
btn1.onclick = () => {    //will action once mouse get clciked
console.log("Handler 2"); 
};  //multiple function will run the last function, will overite the old funtion 

let div =  document.querySelector("div");
div.onmouseover = () => {
    console.log("Hovered");
    div.style.backgroundColor = "red";

    let divv =  document.querySelector("div");
    divv.remove();
    let newHead = document.createElement("h1");
    newHead.innerHTML = "Dont put your mouse there again!";
    document.querySelector("body").append(newHead);
    
};


btn1.addEventListener("clcik", () => {
    console.log("button 1 was clicked");
});
btn1.addEventListener("clcik", () => {
    console.log("button 1 was clicked 2 time");
});

let div =  document.querySelector("div");  //uisng thi, we can do multiple time
*/

btn1.addEventListener("clcik", () => {
    console.log("button 1 was clicked 1 time");
});
btn1.addEventListener("clcik", () => {
    console.log("button 1 was clicked 2 time");
});

const handler3 =  () => { //creating as variable
    console.log("button 1 was clicked 3 time");
};

btn1.addEventListener("clcik", () => {
    console.log("button 1 was clicked 4 time");
});
 //remove
/*
 btn1.addEventListener("click", ()=>{
    console.log("button 1 was clicked");
    btn1.remove();
 }) */

 btn1.removeEventListener("click", handler3); // remmove by variable