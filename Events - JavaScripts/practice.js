let wbutton =  document.querySelector("#lightb");
let whitebody =  document.querySelector("body");
wbutton.onclick = () => {
    console.log("Clicked");
    whitebody.style.backgroundColor = "white";
    wbutton.style.backgroundColor = "black";
    bbutton.style.backgroundColor = "white";
}

let bbutton =  document.querySelector("#darkb");
let darkbody =  document.querySelector("body");
bbutton.onclick = () => {
    console.log("Clicked");
    darkbody.style.backgroundColor = "black";
    bbutton.style.backgroundColor = "black";
    wbutton.style.backgroundColor = "white";

}
