document.body.style.background = "green";
//best way to access is ID
document.getElementById("heading").innerHTML = "Hello" //menipulating h1 in html
let heading = document.getElemenByClassName("heading").innerHTML = "Hello" //menipulating h2 in html;
console.log(heading);

let parahs = document.getElementsByTagName("");

//querryselector

let elements = document.querySelector("p"); //single access
cosnole.log(elements);

let elements2 = document.querySelectorAll("p"); //node list //multiple access


// properties 
// tagName <- to see tag
//innerText <- to see text content and all its children
//innerHTML <- 
//textContent


//child access

document.querySelector("div").children;