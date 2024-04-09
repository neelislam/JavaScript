/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name); //getting access using attributes here name is an attribute

//for paragraph
let pera =  document.querySelector("p");
console.log(pera.getAttribute("class")); //getting access using attributes here
*/
//lets change attribute value
// lets change paragraph attribute name
let para =  document.querySelector("p");
console.log(para.setAttribute("class", "paragraph")); //here setAttribute  changed class to paragraph

//style attribute
let div  = document.querySelector("div");
div.style.backgroundColor = "green"; //change background color (maximum priority)

div.style.fontSize= "30px"; //changing font size to 30px
div.innerText = "hello world"; //changinf text

//create a button in that html
let newbutton = document.createElement("button");
newbutton.innerText = "click me"; 
console.log(newbutton);
let div = document.querySelector("div"); //accesing div
//div.append(button); // add at last
//div.prepend(button);
//div.before(button); // absolutly before the div the bttn will shown
div.after(newbutton); // absolutly after the div the bttn will
//to make it visible 
/*lladds at the end of node (inside)
node.prepend( el ) //adds at the start of node (inside)
node.before( el ) //adds before the node (outside)
node.after( el ) //adds after the node (outside)*/
let newHead = document.createElement("h1");
newHead.innerHTML = "Hello I am Neel";
document.querySelector("body").prepend(newHead);

//deleting a paragraph or any attribute
/*
let para =  document.querySelector("p");
para.remove();
*/


