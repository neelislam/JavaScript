let h2 = document.querySelector("h2");
console.dir(h2.innerText);
//adding the text
h2.innerText = h2.innerText+ " by Neel Islam";

let divs = document.querySelectorAll(".box");

divs[0].innerText = "New Unique value one"
divs[1].innerText = "New Unique value two"

//or use for loops 
/*
let idx  = 1;
for (div of divs){
    div.innerText = `New Unique value ${idx}`;
    idx++;
}
*/