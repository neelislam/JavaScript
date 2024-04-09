let newBtn = document.createElement("button"); // creating new bttn
newBtn.innerText = "Click me";
newBtn.style.color = "black"; //styling the new btn
newBtn.style.backgroundColor = "white";

document.querySelector("body").append(newBtn); //to show inside the body //append to add new btn


let para = document.querySelector("p");

para.classList.add("newclass"); //we use classList to avoid overriting

//para.classList.remove("newclass"); //remove the newclass

